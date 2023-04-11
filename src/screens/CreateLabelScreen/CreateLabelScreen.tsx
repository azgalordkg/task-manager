import { yupResolver } from '@hookform/resolvers/yup';
import { isEqual } from 'lodash';
import React, { FC } from 'react';
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

  const formMethods = useForm<CreateTagData>({
    mode: 'onBlur',
    resolver: yupResolver(createLabelFormSchema),
  });

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

  const editInitialLabelValue = (data: CreateTagData, id?: string) => {
    if (id) {
      const stringifyValue = JSON.stringify(findOneTag(id));
      const { name, color } = JSON.parse(stringifyValue);
      const label = { name, color };

      return isEqual(data, label);
    }
  };

  const isDisabled =
    !editInitialLabelValue(formMethods.watch(), labelId) &&
    formMethods.formState.isValid;

  return (
    <ModalWrapper
      title={`${labelId ? `${t('EDIT')}` : `${t('CREATE')}`} ${t('A_LABEL')}`}
      onDonePress={formMethods.handleSubmit(onSubmit)}
      isDoneDisabled={!isDisabled}
      doneText="Done"
      onRequestClose={handleCloseModal}>
      <CreateLabelForm
        formMethods={formMethods}
        editItemId={labelId}
        onClose={handleCloseModal}
      />
    </ModalWrapper>
  );
};
