import {
  ArrowDownSquare,
  Calendar,
  Label,
  TimeCircle,
} from '@/components/icons';
import { COLORS } from '@/constants/colors';

export const ITEMS_LIST = [
  {
    navigationName: 'Unscheduled',
    prependIcon: TimeCircle,
    title: 'Unscheduled',
    color: COLORS.RED,
  },
  {
    navigationName: 'TaskDay',
    prependIcon: ArrowDownSquare,
    title: 'Today',
    color: COLORS.GREEN,
  },
  {
    navigationName: 'Upcoming',
    prependIcon: Calendar,
    title: 'Upcoming',
    color: COLORS.BLUE,
  },
  {
    navigationName: 'Labels',
    prependIcon: Label,
    title: 'Labels',
    color: COLORS.YELLOW,
  },
];
