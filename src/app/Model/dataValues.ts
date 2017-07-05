import { column } from './column';

export class DataInfo{    
    title: string;
    templateId: string;
    data: DataValues[]
}

export class DataValues{
    rowId: string;
    // dictionary to hold information regarding column id and column value
    dicInfo: Map<string, string>;
}

// export class MapColInfo{
//     columnId: string;
//     colValue: string;
// }