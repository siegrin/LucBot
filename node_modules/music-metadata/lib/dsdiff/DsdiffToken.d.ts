import { IChunkHeader } from '../iff';
import { IGetToken } from 'strtok3/lib/core';
export { IChunkHeader } from '../iff';
/**
 * DSDIFF chunk header
 * The data-size encoding is deviating from EA-IFF 85
 * Ref: http://www.sonicstudio.com/pdf/dsd/DSDIFF_1.5_Spec.pdf
 */
export declare const ChunkHeader: IGetToken<IChunkHeader>;
