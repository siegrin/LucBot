"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatroskaTagMapper = void 0;
const CaseInsensitiveTagMap_1 = require("../common/CaseInsensitiveTagMap");
/**
 * EBML Tag map
 */
const ebmlTagMap = {
    'segment:title': 'title',
    'album:ARITST': 'albumartist',
    'album:ARITSTSORT': 'albumartistsort',
    'album:TITLE': 'album',
    'album:DATE_RECORDED': 'originaldate',
    'track:ARTIST': 'artist',
    'track:ARTISTSORT': 'artistsort',
    'track:TITLE': 'title',
    'track:PART_NUMBER': 'track',
    'track:MUSICBRAINZ_TRACKID': 'musicbrainz_recordingid',
    'track:MUSICBRAINZ_ALBUMID': 'musicbrainz_albumid',
    'track:MUSICBRAINZ_ARTISTID': 'musicbrainz_artistid',
    'track:PUBLISHER': 'label',
    picture: 'picture'
};
class MatroskaTagMapper extends CaseInsensitiveTagMap_1.CaseInsensitiveTagMap {
    constructor() {
        super(['matroska'], ebmlTagMap);
    }
}
exports.MatroskaTagMapper = MatroskaTagMapper;
