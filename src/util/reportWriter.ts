import { CsvWriter } from "csv-writer/src/lib/csv-writer";
import { GenerateReportOptions } from "../types";

export const writeReports = async (
    options: GenerateReportOptions,
    records: any,
    writer: CsvWriter<any>,
) => {
    const { command, output } = options;

    if (output === 'json') {
        command.context.stdout.write(JSON.stringify(records, null, 2));
        return;
    }

    if (output === 'csv') {
        await writer.writeRecords(records);
    }
};
