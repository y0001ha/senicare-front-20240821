import { CareRecord } from "src/types";
import ResponseDto from "../response.dto";

// interface: get care record response body dto //
export default interface GetCareRecordResponsDto extends ResponseDto {
    careRecords: CareRecord[];
}