import { UserInfo } from '../../step-info/models/user-info.model';
import { Plan } from '../../step-plan/models/plan.model';
import { AddOnSummaryStep } from './../../step-add-ons/models/addon-summary.model';

export type SummaryRecap = UserInfo | Plan | AddOnSummaryStep;
