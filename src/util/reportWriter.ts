import { GenerateReportOptions } from "../types";
import { CsvWriter } from "csv-writer/src/lib/csv-writer";

export const writeReports = async (
    options: GenerateReportOptions,
    records: any,
    writer: CsvWriter<any>,
) => {
    const { command, output } = options;

    command.context.stdout.write(output);
    if(output === 'json') {
        command.context.stdout.write(JSON.stringify(records, null, 2));
        return;
    }

    if(output === 'csv') {
        return await writer.writeRecords(records);
    }
};
