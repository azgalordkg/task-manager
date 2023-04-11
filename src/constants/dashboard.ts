import {
  ArrowDownSquare,
  Calendar,
  Label,
  TimeCircle,
} from '@/components/icons';
import { COLORS } from '@/constants/colors';

export const DASHBOARD_LIST = [
  {
    navigationName: 'Unscheduled',
    prependIcon: TimeCircle,
    title: 'UNSCHEDULED',
    color: COLORS.RED,
  },
  {
    navigationName: 'TaskDay',
    prependIcon: ArrowDownSquare,
    title: 'TODAY',
    color: COLORS.GREEN,
  },
  {
    navigationName: 'Upcoming',
    prependIcon: Calendar,
    title: 'UPCOMING',
    color: COLORS.BLUE,
  },
  {
    navigationName: 'LabelSettings',
    prependIcon: Label,
    title: 'LABELS',
    color: COLORS.YELLOW,
  },
];
