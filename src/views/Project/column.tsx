import { TColumn } from "components/Table/types"; 
import { IRow } from "./type";

export const columns: TColumn<IRow, keyof IRow>[] = [
  {
    key: "projectName",
    header: <div>Project Name</div>,
  },
  {
    key: "startDate",
    header: <div>Start Date</div>,
  },
  {
    key: "stage",
    header: <div>Stage</div>,
  },
  {
    key: "projectManager",
    header: <div>Budget</div>,
  },
  {
    key: "noOfAssignee",
    header: <div>No. of Assignee</div>,
  },
];
