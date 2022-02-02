/// <reference types="node" />
import { IRatio } from "../type";
export declare type StringEncoding = 'iso-8859-1' | 'utf16' | 'utf8' | 'utf16le';
export default class Util {
    static strtokBITSET: {
        get: (buf: Buffer, off: number, bit: number) => boolean;
        len: number;
    };
    /**
     *
     * @param buffer
     * @param start
     * @param end
     * @param encoding // ToDo: ts.enum
     * @return {number}
     */
    static findZero(buffer: Buffer, start: number, end: number, encoding?: string): number;
    static trimRightNull(x: string): string;
    static swapBytes(buffer: Buffer): Buffer;
    static readUTF16String(buffer: Buffer): string;
    /**
     *
     * @param buffer Decoder input data
     * @param encoding 'utf16le' | 'utf16' | 'utf8' | 'iso-8859-1'
     * @return {string}
     */
    static decodeString(buffer: Buffer, encoding: StringEncoding): string;
    static stripNulls(str: string): string;
    /**
     * Read bit-aligned number start from buffer
     * Total offset in bits = byteOffset * 8 + bitOffset
     * @param buf Byte buffer
     * @param byteOffset Starting offset in bytes
     * @param bitOffset Starting offset in bits: 0 = lsb
     * @param len Length of number in bits
     * @return {number} decoded bit aligned number
     */
    static getBitAllignedNumber(buf: Buffer, byteOffset: number, bitOffset: number, len: number): number;
    /**
     * Read bit-aligned number start from buffer
     * Total offset in bits = byteOffset * 8 + bitOffset
     * @param buf Byte buffer
     * @param byteOffset Starting offset in bytes
     * @param bitOffset Starting offset in bits: 0 = most significant bit, 7 is least significant bit
     * @return {number} decoded bit aligned number
     */
    static isBitSet(buf: Buffer, byteOffset: number, bitOffset: number): boolean;
    static a2hex(str: string): string;
}
/**
 * Convert power ratio to DB
 * ratio: [0..1]
 */
export declare function ratioToDb(ratio: number): number;
/**
 * Convert dB to ratio
 * db Decibels
 */
export declare function dbToRatio(dB: number): number;
/**
 * Convert replay gain to ratio and Decibel
 * @param value string holding a ratio like '0.034' or '-7.54 dB'
 */
export declare function toRatio(value: string): IRatio;
