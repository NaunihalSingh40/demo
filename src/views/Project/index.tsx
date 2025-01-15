import PTable from "components/Table";
import { columns } from "./column";
import { rows } from "./rows";

export const ProjectTable = () => {
  return (
    <div>
      <PTable rows={rows} columns={columns} />
    </div>
  );
};
