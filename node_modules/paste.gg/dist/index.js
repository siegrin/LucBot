"use strict";
/*
 * Copyright © SerenModz21 2018 - 2021 All Rights Reserved.
 * Unauthorized distribution of any code within this project may result in consequences.
 * Refer to the README for more information.
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _PasteGG_auth, _PasteGG_url;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasteGG = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const querystring_1 = require("querystring");
const interfaces_1 = require("./interfaces");
const defaultOptions = {
    baseUrl: "https://api.paste.gg",
    mainUrl: "https://paste.gg",
    version: 1,
};
/**
 * The main class for interacting with the Paste.gg API
 */
class PasteGG {
    /**
     * Create a new instance of PasteGG
     * @param {string} auth Optional auth key
     * @param {Options} options Options for the paste server
     * @class PasteGG
     * @public
     * @example
     * // If you want to be anonymous
     * const pasteGG = new PasteGG()
     *
     * // If you want to use an api key
     * const pasteGG = new PasteGG("apiKeyHere")
     */
    constructor(auth, options = defaultOptions) {
        _PasteGG_auth.set(this, void 0);
        _PasteGG_url.set(this, void 0);
        /**
         * The auth key
         * @type {string}
         * @private
         * @readonly
         */
        __classPrivateFieldSet(this, _PasteGG_auth, auth, "f");
        /**
         * The options for the paste server
         * @type {Options}
         * @public
         * @readonly
         */
        this.options = Object.assign(defaultOptions, options);
        /**
         * The version of the API wrapper
         * @type {string}
         * @public
         * @readonly
         */
        this.version = `v${require("../package.json").version}`;
        /**
         * The full URL for the API
         * @type {string}
         * @private
         * @readonly
         */
        __classPrivateFieldSet(this, _PasteGG_url, `${this.options.baseUrl}/v${this.options.version}`, "f");
    }
    /**
     * Make a request to the API.
     * @param {keyof typeof Methods} method
     * @param {string} path
     * @param {object} body
     * @param {string} key
     * @returns {Promise<T>}
     * @private
     */
    async _request(method, path, body, key) {
        const headers = {};
        if (__classPrivateFieldGet(this, _PasteGG_auth, "f"))
            headers.Authorization = `Key ${__classPrivateFieldGet(this, _PasteGG_auth, "f")}`;
        if (key === null || key === void 0 ? void 0 : key.length)
            headers.Authorization = `Key ${key}`;
        if (method !== "GET")
            headers["Content-Type"] = "application/json";
        let urlPath = `${__classPrivateFieldGet(this, _PasteGG_url, "f")}${path}`;
        if (body && method === "GET")
            urlPath += `?${querystring_1.stringify(body)}`;
        const res = await node_fetch_1.default(urlPath, {
            method,
            headers,
            body: body && method !== "GET" ? JSON.stringify(body) : null,
        });
        return res.json();
    }
    /**
     * Get an existing paste.
     * @see https://github.com/ascclemens/paste/blob/master/api.md#get-pastesid
     * @param {string} id The ID of the paste.
     * @param {boolean} full Includes the contents of files if true.
     * @returns {Promise<Output>}
     * @public
     * @example
     * // if you would like to exclude file contents
     * await pasteGG.get("idHere")
     *
     * // If you would like to include file contents
     * await pasteGG.get("idHere", true)
     */
    async get(id, full = false) {
        if (!(id === null || id === void 0 ? void 0 : id.length)) {
            throw new Error("A paste ID is required to use PasteGG#get()");
        }
        return this._request(interfaces_1.Methods.GET, `/pastes/${id}`, { full });
    }
    /**
     * Create a new paste.
     * @see https://github.com/ascclemens/paste/blob/master/api.md#post-pastes
     * @param {Post} input The information to create the paste with.
     * @returns {Promise<Output>}
     * @public
     * @example
     * await pasteGG.post({
     *   name: "Paste name", // Optional
     *   description: "Paste description", // Optional
     *   expires: "2020-12-21T02:25:56.428Z", // Optional (must be a UTC ISO 8601 string)
     *   files: [{
     *     name: "file.txt", // Optional
     *     content: {
     *       format: "text",
     *       value: "This is where the file content will go"
     *     }
     *   }]
     * })
     */
    async post(input) {
        if (!input) {
            throw new Error("An input object is required to use PasteGG#post()");
        }
        const res = await this._request(interfaces_1.Methods.POST, "/pastes", input);
        if (res.result)
            res.result.url = `${this.options.mainUrl}/${res.result.id}`;
        return res;
    }
    /**
     * Deletes an existing paste.
     * @see https://github.com/ascclemens/paste/blob/master/api.md#delete-pastesid
     * @param {string} id The ID of the paste to delete.
     * @param {string} [key] Auth key or deletion key (leave blank if you have set the auth key in the constructor)
     * @returns {Promise<Output | void>}
     * @public
     * @example
     * // Delete with deletion key
     * await pasteGG.delete("idHere", "deletionKeyHere")
     *
     * // Delete with auth key if not set in constructor
     * await pasteGG.delete("idHere", "authKeyHere")
     *
     * // Leave blank if auth key is in the class constructor
     * await pasteGG.delete("idHere")
     */
    async delete(id, key) {
        var _a;
        if (!((_a = __classPrivateFieldGet(this, _PasteGG_auth, "f")) === null || _a === void 0 ? void 0 : _a.length) && !(key === null || key === void 0 ? void 0 : key.length))
            throw new Error("An auth key or deletion key is needed to use PasteGG#delete()");
        return this._request(interfaces_1.Methods.DELETE, `/pastes/${id}`, null, key);
    }
    /**
     * Update an existing paste.
     * @see https://github.com/ascclemens/paste/blob/master/api.md#patch-pastesid
     * @param {string} id The ID for the paste to update.
     * @param {Update} options The options you wish to update.
     * @returns {Promise<Output | void>}
     * @public
     * @example
     * await pasteGG.update("idHere", {
     *   name: "new name", // Optional (if you want to remove the name)
     *   description: "new description"
     * })
     */
    async update(id, options) {
        var _a;
        if (!((_a = __classPrivateFieldGet(this, _PasteGG_auth, "f")) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error("An auth key is required to use PasteGG#update()");
        if (!options.name)
            options.name = null;
        return this._request(interfaces_1.Methods.PATCH, `/pastes/${id}`, options);
    }
}
exports.PasteGG = PasteGG;
_PasteGG_auth = new WeakMap(), _PasteGG_url = new WeakMap();
exports.default = PasteGG;
module.exports = PasteGG; // JS: default import
module.exports.PasteGG = PasteGG; // JS: deconstruct import
/**
 * The header options
 * @typedef {IHeader} IHeader
 * @property {string} [Content-Type] The request content type
 * @property {string} [Authorization] Authorization for the request
 */
/**
 * @typedef {Options} Options
 * @property {string} [baseUrl=https://api.paste.gg] The base URL of the API
 * @property {string} [mainUrl=https://paste.gg] The URL of the main website
 * @property {number} [version=1] The version of the API
 */
/**
 * @typedef {Result} Result
 * @property {string} id The ID of the created paste
 * @property {string} [name] The name of the created paste
 * @property {string} [url] The URL for the result
 * @property {Author} [author] The author of the paste
 * @property {string} [description] The description of the created paste
 * @property {public | unlisted | private} [visibility=unlisted] The visibility of the created paste
 * @property {string} created_at The date the paste was created
 * @property {string} updated_at The date the paste was last updated
 * @property {string} [expires] The date when the paste expires
 * @property {File[]} [files] The files used in the created paste
 * @property {string} [deletion_key] The deletion key of the created paste
 */
/**
 * @typedef {Output} Output
 * @property {string} status The output status
 * @property {Result} [result] The result data object
 * @property {string} [error] The error key
 * @property {string} [message] The error message
 */
/**
 * @typedef {Post} Post
 * @property {string} [name] The name of the paste
 * @property {string} [description] The description of the paste (must be less than 25 KiB)
 * @property {public | unlisted | private} [visibility=unlisted] The visibility of the paste
 * @property {string} [expires] The expiration date of the paste (must be a UTC ISO 8601 string)
 * @property {FileOut[]} files Array of files to add to the paste (at least one file)
 */
/**
 * @typedef {Author} Author
 * @property {string} [id] The ID of the author
 * @property {string} [username] The username of the author
 * @property {string} [name] The name of the author
 */
/**
 * @typedef {Update} Update
 * @property {string} [name] The new name of the post
 * @property {string} description The new description of the post
 */
/**
 * @typedef {File} File
 * @property {string} id The ID of the file
 * @property {string} name The name of the file
 * @property {string | null} highlight_language The syntax highlighting language used
 */
/**
 * @typedef {Content} Content
 * @property {text | base64 | gzip | xz} format The format of the file
 * @property {string} [highlight_language] The syntax highlighting language to use
 * @property {string} value The value of the file contents
 */
/**
 * @typedef {FileOut} FileOut
 * @property {string} [name] The name of the file
 * @property {Content} content The content of the file
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILDREQUErQjtBQUMvQiw2Q0FBc0U7QUFDdEUsNkNBV3NCO0FBRXRCLE1BQU0sY0FBYyxHQUFZO0lBQzlCLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0IsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sT0FBTztJQU1YOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILFlBQVksSUFBYSxFQUFFLFVBQW1CLGNBQWM7UUFsQjVELGdDQUF1QjtRQUN2QiwrQkFBc0I7UUFrQnBCOzs7OztXQUtHO1FBQ0gsdUJBQUEsSUFBSSxpQkFBUyxJQUFJLE1BQUEsQ0FBQztRQUNsQjs7Ozs7V0FLRztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBbUIsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFOzs7OztXQUtHO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hEOzs7OztXQUtHO1FBQ0gsdUJBQUEsSUFBSSxnQkFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQUEsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyxLQUFLLENBQUMsUUFBUSxDQUNwQixNQUE0QixFQUM1QixJQUFZLEVBQ1osSUFBYSxFQUNiLEdBQVk7UUFFWixNQUFNLE9BQU8sR0FBWSxFQUFFLENBQUM7UUFDNUIsSUFBSSx1QkFBQSxJQUFJLHFCQUFNO1lBQUUsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLHVCQUFBLElBQUks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UUFDdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFTLG9CQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBRVEsMEJBQU87O0FBQ2hCLGtCQUFlLE9BQU8sQ0FBQztBQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQjtBQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyx5QkFBeUI7QUFFM0Q7Ozs7O0dBS0c7QUFFSDs7Ozs7R0FLRztBQUVIOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSDs7Ozs7O0dBTUc7QUFFSDs7Ozs7OztHQU9HO0FBRUg7Ozs7O0dBS0c7QUFFSDs7OztHQUlHO0FBRUg7Ozs7O0dBS0c7QUFFSDs7Ozs7R0FLRztBQUVIOzs7O0dBSUciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IMKpIFNlcmVuTW9kejIxIDIwMTggLSAyMDIxIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBVbmF1dGhvcml6ZWQgZGlzdHJpYnV0aW9uIG9mIGFueSBjb2RlIHdpdGhpbiB0aGlzIHByb2plY3QgbWF5IHJlc3VsdCBpbiBjb25zZXF1ZW5jZXMuXG4gKiBSZWZlciB0byB0aGUgUkVBRE1FIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnlJbnB1dCBhcyBJbnB1dCwgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQge1xuICBBdXRob3IsXG4gIENvbnRlbnQsXG4gIEZpbGUsXG4gIElIZWFkZXIsXG4gIE1ldGhvZHMsXG4gIE9wdGlvbnMsXG4gIE91dHB1dCxcbiAgUG9zdCxcbiAgUmVzdWx0LFxuICBVcGRhdGUsXG59IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSA8T3B0aW9ucz57XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcGkucGFzdGUuZ2dcIixcbiAgbWFpblVybDogXCJodHRwczovL3Bhc3RlLmdnXCIsXG4gIHZlcnNpb246IDEsXG59O1xuXG4vKipcbiAqIFRoZSBtYWluIGNsYXNzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBQYXN0ZS5nZyBBUElcbiAqL1xuY2xhc3MgUGFzdGVHRyB7XG4gIHJlYWRvbmx5ICNhdXRoOiBzdHJpbmc7XG4gIHJlYWRvbmx5ICN1cmw6IHN0cmluZztcbiAgcmVhZG9ubHkgb3B0aW9uczogT3B0aW9ucztcbiAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUGFzdGVHR1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aCBPcHRpb25hbCBhdXRoIGtleVxuICAgKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIHBhc3RlIHNlcnZlclxuICAgKiBAY2xhc3MgUGFzdGVHR1xuICAgKiBAcHVibGljXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIElmIHlvdSB3YW50IHRvIGJlIGFub255bW91c1xuICAgKiBjb25zdCBwYXN0ZUdHID0gbmV3IFBhc3RlR0coKVxuICAgKlxuICAgKiAvLyBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYXBpIGtleVxuICAgKiBjb25zdCBwYXN0ZUdHID0gbmV3IFBhc3RlR0coXCJhcGlLZXlIZXJlXCIpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhdXRoPzogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zID0gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXV0aCBrZXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy4jYXV0aCA9IGF1dGg7XG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgZm9yIHRoZSBwYXN0ZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7T3B0aW9uc31cbiAgICAgKiBAcHVibGljXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbjxPcHRpb25zLCBPcHRpb25zPihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB3cmFwcGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHVibGljXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy52ZXJzaW9uID0gYHYke3JlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIikudmVyc2lvbn1gO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIFVSTCBmb3IgdGhlIEFQSVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLiN1cmwgPSBgJHt0aGlzLm9wdGlvbnMuYmFzZVVybH0vdiR7dGhpcy5vcHRpb25zLnZlcnNpb259YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgcmVxdWVzdCB0byB0aGUgQVBJLlxuICAgKiBAcGFyYW0ge2tleW9mIHR5cGVvZiBNZXRob2RzfSBtZXRob2RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtvYmplY3R9IGJvZHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX3JlcXVlc3Q8VD4oXG4gICAgbWV0aG9kOiBrZXlvZiB0eXBlb2YgTWV0aG9kcyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgYm9keT86IG9iamVjdCxcbiAgICBrZXk/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgaGVhZGVyczogSUhlYWRlciA9IHt9O1xuICAgIGlmICh0aGlzLiNhdXRoKSBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgS2V5ICR7dGhpcy4jYXV0aH1gO1xuICAgIGlmIChrZXk/Lmxlbmd0aCkgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEtleSAke2tleX1gO1xuICAgIGlmIChtZXRob2QgIT09IFwiR0VUXCIpIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblxuICAgIGxldCB1cmxQYXRoID0gYCR7dGhpcy4jdXJsfSR7cGF0aH1gO1xuICAgIGlmIChib2R5ICYmIG1ldGhvZCA9PT0gXCJHRVRcIikgdXJsUGF0aCArPSBgPyR7c3RyaW5naWZ5KDxJbnB1dD5ib2R5KX1gO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsUGF0aCwge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGJvZHk6IGJvZHkgJiYgbWV0aG9kICE9PSBcIkdFVFwiID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGV4aXN0aW5nIHBhc3RlLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2NjbGVtZW5zL3Bhc3RlL2Jsb2IvbWFzdGVyL2FwaS5tZCNnZXQtcGFzdGVzaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgcGFzdGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbCBJbmNsdWRlcyB0aGUgY29udGVudHMgb2YgZmlsZXMgaWYgdHJ1ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8T3V0cHV0Pn1cbiAgICogQHB1YmxpY1xuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBpZiB5b3Ugd291bGQgbGlrZSB0byBleGNsdWRlIGZpbGUgY29udGVudHNcbiAgICogYXdhaXQgcGFzdGVHRy5nZXQoXCJpZEhlcmVcIilcbiAgICpcbiAgICogLy8gSWYgeW91IHdvdWxkIGxpa2UgdG8gaW5jbHVkZSBmaWxlIGNvbnRlbnRzXG4gICAqIGF3YWl0IHBhc3RlR0cuZ2V0KFwiaWRIZXJlXCIsIHRydWUpXG4gICAqL1xuICBhc3luYyBnZXQoaWQ6IHN0cmluZywgZnVsbDogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxPdXRwdXQ+IHtcbiAgICBpZiAoIWlkPy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgcGFzdGUgSUQgaXMgcmVxdWlyZWQgdG8gdXNlIFBhc3RlR0cjZ2V0KClcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Q8T3V0cHV0PihNZXRob2RzLkdFVCwgYC9wYXN0ZXMvJHtpZH1gLCB7IGZ1bGwgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBhc3RlLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2NjbGVtZW5zL3Bhc3RlL2Jsb2IvbWFzdGVyL2FwaS5tZCNwb3N0LXBhc3Rlc1xuICAgKiBAcGFyYW0ge1Bvc3R9IGlucHV0IFRoZSBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhlIHBhc3RlIHdpdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE91dHB1dD59XG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogYXdhaXQgcGFzdGVHRy5wb3N0KHtcbiAgICogICBuYW1lOiBcIlBhc3RlIG5hbWVcIiwgLy8gT3B0aW9uYWxcbiAgICogICBkZXNjcmlwdGlvbjogXCJQYXN0ZSBkZXNjcmlwdGlvblwiLCAvLyBPcHRpb25hbFxuICAgKiAgIGV4cGlyZXM6IFwiMjAyMC0xMi0yMVQwMjoyNTo1Ni40MjhaXCIsIC8vIE9wdGlvbmFsIChtdXN0IGJlIGEgVVRDIElTTyA4NjAxIHN0cmluZylcbiAgICogICBmaWxlczogW3tcbiAgICogICAgIG5hbWU6IFwiZmlsZS50eHRcIiwgLy8gT3B0aW9uYWxcbiAgICogICAgIGNvbnRlbnQ6IHtcbiAgICogICAgICAgZm9ybWF0OiBcInRleHRcIixcbiAgICogICAgICAgdmFsdWU6IFwiVGhpcyBpcyB3aGVyZSB0aGUgZmlsZSBjb250ZW50IHdpbGwgZ29cIlxuICAgKiAgICAgfVxuICAgKiAgIH1dXG4gICAqIH0pXG4gICAqL1xuICBhc3luYyBwb3N0KGlucHV0OiBQb3N0KTogUHJvbWlzZTxPdXRwdXQ+IHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBpbnB1dCBvYmplY3QgaXMgcmVxdWlyZWQgdG8gdXNlIFBhc3RlR0cjcG9zdCgpXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuX3JlcXVlc3Q8T3V0cHV0PihNZXRob2RzLlBPU1QsIFwiL3Bhc3Rlc1wiLCBpbnB1dCk7XG4gICAgaWYgKHJlcy5yZXN1bHQpIHJlcy5yZXN1bHQudXJsID0gYCR7dGhpcy5vcHRpb25zLm1haW5Vcmx9LyR7cmVzLnJlc3VsdC5pZH1gO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbiBleGlzdGluZyBwYXN0ZS5cbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXNjY2xlbWVucy9wYXN0ZS9ibG9iL21hc3Rlci9hcGkubWQjZGVsZXRlLXBhc3Rlc2lkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgb2YgdGhlIHBhc3RlIHRvIGRlbGV0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIEF1dGgga2V5IG9yIGRlbGV0aW9uIGtleSAobGVhdmUgYmxhbmsgaWYgeW91IGhhdmUgc2V0IHRoZSBhdXRoIGtleSBpbiB0aGUgY29uc3RydWN0b3IpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE91dHB1dCB8IHZvaWQ+fVxuICAgKiBAcHVibGljXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIERlbGV0ZSB3aXRoIGRlbGV0aW9uIGtleVxuICAgKiBhd2FpdCBwYXN0ZUdHLmRlbGV0ZShcImlkSGVyZVwiLCBcImRlbGV0aW9uS2V5SGVyZVwiKVxuICAgKlxuICAgKiAvLyBEZWxldGUgd2l0aCBhdXRoIGtleSBpZiBub3Qgc2V0IGluIGNvbnN0cnVjdG9yXG4gICAqIGF3YWl0IHBhc3RlR0cuZGVsZXRlKFwiaWRIZXJlXCIsIFwiYXV0aEtleUhlcmVcIilcbiAgICpcbiAgICogLy8gTGVhdmUgYmxhbmsgaWYgYXV0aCBrZXkgaXMgaW4gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAqIGF3YWl0IHBhc3RlR0cuZGVsZXRlKFwiaWRIZXJlXCIpXG4gICAqL1xuICBhc3luYyBkZWxldGUoaWQ6IHN0cmluZywga2V5Pzogc3RyaW5nKTogUHJvbWlzZTxPdXRwdXQgfCB2b2lkPiB7XG4gICAgaWYgKCF0aGlzLiNhdXRoPy5sZW5ndGggJiYgIWtleT8ubGVuZ3RoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkFuIGF1dGgga2V5IG9yIGRlbGV0aW9uIGtleSBpcyBuZWVkZWQgdG8gdXNlIFBhc3RlR0cjZGVsZXRlKClcIlxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0PE91dHB1dD4oTWV0aG9kcy5ERUxFVEUsIGAvcGFzdGVzLyR7aWR9YCwgbnVsbCwga2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gZXhpc3RpbmcgcGFzdGUuXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FzY2NsZW1lbnMvcGFzdGUvYmxvYi9tYXN0ZXIvYXBpLm1kI3BhdGNoLXBhc3Rlc2lkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgZm9yIHRoZSBwYXN0ZSB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB7VXBkYXRlfSBvcHRpb25zIFRoZSBvcHRpb25zIHlvdSB3aXNoIHRvIHVwZGF0ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8T3V0cHV0IHwgdm9pZD59XG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogYXdhaXQgcGFzdGVHRy51cGRhdGUoXCJpZEhlcmVcIiwge1xuICAgKiAgIG5hbWU6IFwibmV3IG5hbWVcIiwgLy8gT3B0aW9uYWwgKGlmIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgbmFtZSlcbiAgICogICBkZXNjcmlwdGlvbjogXCJuZXcgZGVzY3JpcHRpb25cIlxuICAgKiB9KVxuICAgKi9cbiAgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IFVwZGF0ZSk6IFByb21pc2U8T3V0cHV0IHwgdm9pZD4ge1xuICAgIGlmICghdGhpcy4jYXV0aD8ubGVuZ3RoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW4gYXV0aCBrZXkgaXMgcmVxdWlyZWQgdG8gdXNlIFBhc3RlR0cjdXBkYXRlKClcIik7XG5cbiAgICBpZiAoIW9wdGlvbnMubmFtZSkgb3B0aW9ucy5uYW1lID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDxPdXRwdXQ+KE1ldGhvZHMuUEFUQ0gsIGAvcGFzdGVzLyR7aWR9YCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGFzdGVHRyB9O1xuZXhwb3J0IGRlZmF1bHQgUGFzdGVHRztcbm1vZHVsZS5leHBvcnRzID0gUGFzdGVHRzsgLy8gSlM6IGRlZmF1bHQgaW1wb3J0XG5tb2R1bGUuZXhwb3J0cy5QYXN0ZUdHID0gUGFzdGVHRzsgLy8gSlM6IGRlY29uc3RydWN0IGltcG9ydFxuXG4vKipcbiAqIFRoZSBoZWFkZXIgb3B0aW9uc1xuICogQHR5cGVkZWYge0lIZWFkZXJ9IElIZWFkZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbQ29udGVudC1UeXBlXSBUaGUgcmVxdWVzdCBjb250ZW50IHR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbQXV0aG9yaXphdGlvbl0gQXV0aG9yaXphdGlvbiBmb3IgdGhlIHJlcXVlc3RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPcHRpb25zfSBPcHRpb25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Jhc2VVcmw9aHR0cHM6Ly9hcGkucGFzdGUuZ2ddIFRoZSBiYXNlIFVSTCBvZiB0aGUgQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW21haW5Vcmw9aHR0cHM6Ly9wYXN0ZS5nZ10gVGhlIFVSTCBvZiB0aGUgbWFpbiB3ZWJzaXRlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ZlcnNpb249MV0gVGhlIHZlcnNpb24gb2YgdGhlIEFQSVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1Jlc3VsdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWQgVGhlIElEIG9mIHRoZSBjcmVhdGVkIHBhc3RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25hbWVdIFRoZSBuYW1lIG9mIHRoZSBjcmVhdGVkIHBhc3RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3VybF0gVGhlIFVSTCBmb3IgdGhlIHJlc3VsdFxuICogQHByb3BlcnR5IHtBdXRob3J9IFthdXRob3JdIFRoZSBhdXRob3Igb2YgdGhlIHBhc3RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Rlc2NyaXB0aW9uXSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNyZWF0ZWQgcGFzdGVcbiAqIEBwcm9wZXJ0eSB7cHVibGljIHwgdW5saXN0ZWQgfCBwcml2YXRlfSBbdmlzaWJpbGl0eT11bmxpc3RlZF0gVGhlIHZpc2liaWxpdHkgb2YgdGhlIGNyZWF0ZWQgcGFzdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjcmVhdGVkX2F0IFRoZSBkYXRlIHRoZSBwYXN0ZSB3YXMgY3JlYXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVwZGF0ZWRfYXQgVGhlIGRhdGUgdGhlIHBhc3RlIHdhcyBsYXN0IHVwZGF0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZXhwaXJlc10gVGhlIGRhdGUgd2hlbiB0aGUgcGFzdGUgZXhwaXJlc1xuICogQHByb3BlcnR5IHtGaWxlW119IFtmaWxlc10gVGhlIGZpbGVzIHVzZWQgaW4gdGhlIGNyZWF0ZWQgcGFzdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZGVsZXRpb25fa2V5XSBUaGUgZGVsZXRpb24ga2V5IG9mIHRoZSBjcmVhdGVkIHBhc3RlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T3V0cHV0fSBPdXRwdXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdGF0dXMgVGhlIG91dHB1dCBzdGF0dXNcbiAqIEBwcm9wZXJ0eSB7UmVzdWx0fSBbcmVzdWx0XSBUaGUgcmVzdWx0IGRhdGEgb2JqZWN0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Vycm9yXSBUaGUgZXJyb3Iga2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gW21lc3NhZ2VdIFRoZSBlcnJvciBtZXNzYWdlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UG9zdH0gUG9zdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtuYW1lXSBUaGUgbmFtZSBvZiB0aGUgcGFzdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZGVzY3JpcHRpb25dIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcGFzdGUgKG11c3QgYmUgbGVzcyB0aGFuIDI1IEtpQilcbiAqIEBwcm9wZXJ0eSB7cHVibGljIHwgdW5saXN0ZWQgfCBwcml2YXRlfSBbdmlzaWJpbGl0eT11bmxpc3RlZF0gVGhlIHZpc2liaWxpdHkgb2YgdGhlIHBhc3RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2V4cGlyZXNdIFRoZSBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIHBhc3RlIChtdXN0IGJlIGEgVVRDIElTTyA4NjAxIHN0cmluZylcbiAqIEBwcm9wZXJ0eSB7RmlsZU91dFtdfSBmaWxlcyBBcnJheSBvZiBmaWxlcyB0byBhZGQgdG8gdGhlIHBhc3RlIChhdCBsZWFzdCBvbmUgZmlsZSlcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBdXRob3J9IEF1dGhvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF0gVGhlIElEIG9mIHRoZSBhdXRob3JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdXNlcm5hbWVdIFRoZSB1c2VybmFtZSBvZiB0aGUgYXV0aG9yXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25hbWVdIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtVcGRhdGV9IFVwZGF0ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtuYW1lXSBUaGUgbmV3IG5hbWUgb2YgdGhlIHBvc3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBUaGUgbmV3IGRlc2NyaXB0aW9uIG9mIHRoZSBwb3N0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RmlsZX0gRmlsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgZmlsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpbGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbH0gaGlnaGxpZ2h0X2xhbmd1YWdlIFRoZSBzeW50YXggaGlnaGxpZ2h0aW5nIGxhbmd1YWdlIHVzZWRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtDb250ZW50fSBDb250ZW50XG4gKiBAcHJvcGVydHkge3RleHQgfCBiYXNlNjQgfCBnemlwIHwgeHp9IGZvcm1hdCBUaGUgZm9ybWF0IG9mIHRoZSBmaWxlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2hpZ2hsaWdodF9sYW5ndWFnZV0gVGhlIHN5bnRheCBoaWdobGlnaHRpbmcgbGFuZ3VhZ2UgdG8gdXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWxlIGNvbnRlbnRzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RmlsZU91dH0gRmlsZU91dFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtuYW1lXSBUaGUgbmFtZSBvZiB0aGUgZmlsZVxuICogQHByb3BlcnR5IHtDb250ZW50fSBjb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBmaWxlXG4gKi9cbiJdfQ==