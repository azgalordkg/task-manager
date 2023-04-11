import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import React, { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CreateLabelForm } from '@/components/forms';
import { ModalWrapper } from '@/components/ui';
import { createLabelFormSchema } from '@/constants/validation';
import { useTagManageContext } from '@/context/hooks';
import { createTag, findOneTag, updateTag } from '@/services';
import { CreateTagData, ScreenProps } from '@/types';
import { vibrate } from '@/utils';

export const CreateLabelScreen: FC<ScreenProps<'CreateLabel'>> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const { fetchTags } = useTagManageContext();

  const labelId = route?.params?.id;
  const handleCloseModal = () => navigation.goBack();

  const formHandler = useForm<CreateTagData>({
    mode: 'onBlur',
    resolver: yupResolver(createLabelFormSchema),
  });

  const formValue = formHandler.watch();
  const isValid = formHandler.formState.isValid;

  const onSubmit = (data: CreateTagData) => {
    if (labelId) {
      updateTag({ ...data, _id: labelId });
    } else {
      createTag(data);
    }

    vibrate('impactHeavy');
    fetchTags();
    handleCloseModal();
  };

  const isDisabled = useMemo(() => {
    if (labelId) {
      const stringifyValue = JSON.stringify(findOneTag(labelId));
      const { name, color } = JSON.parse(stringifyValue);
      const label = { name, color };
      return !isEqual(formValue, label) && isValid;
    }

    return isValid;
  }, [labelId, formValue, isValid]);

  return (
    <ModalWrapper
      title={`${labelId ? `${t('EDIT')}` : `${t('CREATE')}`} ${t('A_LABEL')}`}
      onDonePress={formHandler.handleSubmit(onSubmit)}
      isDoneDisabled={!isDisabled}
      doneText="Done"
      onRequestClose={handleCloseModal}>
      <CreateLabelForm
        formHandler={formHandler}
        editItemId={labelId}
        onClose={handleCloseModal}
      />
    </ModalWrapper>
  );
};
