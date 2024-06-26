/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const SystemInformation = t.iface([], {
  "data": "Data",
  "last_updated": "string",
  "ttl": "number",
  "version": "Version",
  [t.indexKey]: "any",
});

export const Data = t.iface([], {
  "attribution_organization_name": t.opt(t.array("AttributionOrganizationName")),
  "attribution_url": t.opt("string"),
  "brand_assets": t.opt("BrandAssets"),
  "email": t.opt("string"),
  "feed_contact_email": "string",
  "languages": t.array("string"),
  "license_id": t.opt("LicenseID"),
  "license_url": t.opt("string"),
  "manifest_url": t.opt("string"),
  "name": t.array("Name"),
  "opening_hours": "string",
  "operator": t.opt(t.array("Operator")),
  "phone_number": t.opt("string"),
  "privacy_last_updated": t.opt("string"),
  "privacy_url": t.opt(t.array("PrivacyURL")),
  "purchase_url": t.opt("string"),
  "rental_apps": t.opt("RentalApps"),
  "short_name": t.opt(t.array("ShortName")),
  "start_date": t.opt("string"),
  "system_id": "string",
  "termination_date": t.opt("string"),
  "terms_last_updated": t.opt("string"),
  "terms_url": t.opt(t.array("TermsURL")),
  "timezone": "Timezone",
  "url": t.opt("string"),
});

export const AttributionOrganizationName = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const BrandAssets = t.iface([], {
  "brand_image_url": "string",
  "brand_image_url_dark": t.opt("string"),
  "brand_last_modified": "string",
  "brand_terms_url": t.opt("string"),
  "color": t.opt("string"),
  [t.indexKey]: "any",
});

export const LicenseID = t.union(t.lit("0BSD"), t.lit("AAL"), t.lit("Abstyles"), t.lit("AdaCore-doc"), t.lit("Adobe-2006"), t.lit("Adobe-Glyph"), t.lit("ADSL"), t.lit("AFL-1.1"), t.lit("AFL-1.2"), t.lit("AFL-2.0"), t.lit("AFL-2.1"), t.lit("AFL-3.0"), t.lit("Afmparse"), t.lit("AGPL-1.0-only"), t.lit("AGPL-1.0-or-later"), t.lit("AGPL-3.0-only"), t.lit("AGPL-3.0-or-later"), t.lit("Aladdin"), t.lit("AMDPLPA"), t.lit("AML"), t.lit("AMPAS"), t.lit("ANTLR-PD"), t.lit("ANTLR-PD-fallback"), t.lit("Apache-1.0"), t.lit("Apache-1.1"), t.lit("Apache-2.0"), t.lit("APAFML"), t.lit("APL-1.0"), t.lit("App-s2p"), t.lit("APSL-1.0"), t.lit("APSL-1.1"), t.lit("APSL-1.2"), t.lit("APSL-2.0"), t.lit("Arphic-1999"), t.lit("Artistic-1.0"), t.lit("Artistic-1.0-cl8"), t.lit("Artistic-1.0-Perl"), t.lit("Artistic-2.0"), t.lit("Baekmuk"), t.lit("Bahyph"), t.lit("Barr"), t.lit("Beerware"), t.lit("Bitstream-Charter"), t.lit("Bitstream-Vera"), t.lit("BitTorrent-1.0"), t.lit("BitTorrent-1.1"), t.lit("blessing"), t.lit("BlueOak-1.0.0"), t.lit("Borceux"), t.lit("Brian-Gladman-3-Clause"), t.lit("BSD-1-Clause"), t.lit("BSD-2-Clause"), t.lit("BSD-2-Clause-Patent"), t.lit("BSD-2-Clause-Views"), t.lit("BSD-3-Clause"), t.lit("BSD-3-Clause-Attribution"), t.lit("BSD-3-Clause-Clear"), t.lit("BSD-3-Clause-LBNL"), t.lit("BSD-3-Clause-Modification"), t.lit("BSD-3-Clause-No-Military-License"), t.lit("BSD-3-Clause-No-Nuclear-License"), t.lit("BSD-3-Clause-No-Nuclear-License-2014"), t.lit("BSD-3-Clause-No-Nuclear-Warranty"), t.lit("BSD-3-Clause-Open-MPI"), t.lit("BSD-4-Clause"), t.lit("BSD-4-Clause-Shortened"), t.lit("BSD-4-Clause-UC"), t.lit("BSD-4.3RENO"), t.lit("BSD-4.3TAHOE"), t.lit("BSD-Advertising-Acknowledgement"), t.lit("BSD-Attribution-HPND-disclaimer"), t.lit("BSD-Protection"), t.lit("BSD-Source-Code"), t.lit("BSL-1.0"), t.lit("BUSL-1.1"), t.lit("bzip2-1.0.6"), t.lit("C-UDA-1.0"), t.lit("CAL-1.0"), t.lit("CAL-1.0-Combined-Work-Exception"), t.lit("Caldera"), t.lit("CATOSL-1.1"), t.lit("CC-BY-1.0"), t.lit("CC-BY-2.0"), t.lit("CC-BY-2.5"), t.lit("CC-BY-2.5-AU"), t.lit("CC-BY-3.0"), t.lit("CC-BY-3.0-AT"), t.lit("CC-BY-3.0-DE"), t.lit("CC-BY-3.0-IGO"), t.lit("CC-BY-3.0-NL"), t.lit("CC-BY-3.0-US"), t.lit("CC-BY-4.0"), t.lit("CC-BY-NC-1.0"), t.lit("CC-BY-NC-2.0"), t.lit("CC-BY-NC-2.5"), t.lit("CC-BY-NC-3.0"), t.lit("CC-BY-NC-3.0-DE"), t.lit("CC-BY-NC-4.0"), t.lit("CC-BY-NC-ND-1.0"), t.lit("CC-BY-NC-ND-2.0"), t.lit("CC-BY-NC-ND-2.5"), t.lit("CC-BY-NC-ND-3.0"), t.lit("CC-BY-NC-ND-3.0-DE"), t.lit("CC-BY-NC-ND-3.0-IGO"), t.lit("CC-BY-NC-ND-4.0"), t.lit("CC-BY-NC-SA-1.0"), t.lit("CC-BY-NC-SA-2.0"), t.lit("CC-BY-NC-SA-2.0-DE"), t.lit("CC-BY-NC-SA-2.0-FR"), t.lit("CC-BY-NC-SA-2.0-UK"), t.lit("CC-BY-NC-SA-2.5"), t.lit("CC-BY-NC-SA-3.0"), t.lit("CC-BY-NC-SA-3.0-DE"), t.lit("CC-BY-NC-SA-3.0-IGO"), t.lit("CC-BY-NC-SA-4.0"), t.lit("CC-BY-ND-1.0"), t.lit("CC-BY-ND-2.0"), t.lit("CC-BY-ND-2.5"), t.lit("CC-BY-ND-3.0"), t.lit("CC-BY-ND-3.0-DE"), t.lit("CC-BY-ND-4.0"), t.lit("CC-BY-SA-1.0"), t.lit("CC-BY-SA-2.0"), t.lit("CC-BY-SA-2.0-UK"), t.lit("CC-BY-SA-2.1-JP"), t.lit("CC-BY-SA-2.5"), t.lit("CC-BY-SA-3.0"), t.lit("CC-BY-SA-3.0-AT"), t.lit("CC-BY-SA-3.0-DE"), t.lit("CC-BY-SA-4.0"), t.lit("CC-PDDC"), t.lit("CC0-1.0"), t.lit("CDDL-1.0"), t.lit("CDDL-1.1"), t.lit("CDL-1.0"), t.lit("CDLA-Permissive-1.0"), t.lit("CDLA-Permissive-2.0"), t.lit("CDLA-Sharing-1.0"), t.lit("CECILL-1.0"), t.lit("CECILL-1.1"), t.lit("CECILL-2.0"), t.lit("CECILL-2.1"), t.lit("CECILL-B"), t.lit("CECILL-C"), t.lit("CERN-OHL-1.1"), t.lit("CERN-OHL-1.2"), t.lit("CERN-OHL-P-2.0"), t.lit("CERN-OHL-S-2.0"), t.lit("CERN-OHL-W-2.0"), t.lit("CFITSIO"), t.lit("checkmk"), t.lit("ClArtistic"), t.lit("Clips"), t.lit("CMU-Mach"), t.lit("CNRI-Jython"), t.lit("CNRI-Python"), t.lit("CNRI-Python-GPL-Compatible"), t.lit("COIL-1.0"), t.lit("Community-Spec-1.0"), t.lit("Condor-1.1"), t.lit("copyleft-next-0.3.0"), t.lit("copyleft-next-0.3.1"), t.lit("Cornell-Lossless-JPEG"), t.lit("CPAL-1.0"), t.lit("CPL-1.0"), t.lit("CPOL-1.02"), t.lit("Crossword"), t.lit("CrystalStacker"), t.lit("CUA-OPL-1.0"), t.lit("Cube"), t.lit("curl"), t.lit("D-FSL-1.0"), t.lit("diffmark"), t.lit("DL-DE-BY-2.0"), t.lit("DOC"), t.lit("Dotseqn"), t.lit("DRL-1.0"), t.lit("DSDP"), t.lit("dvipdfm"), t.lit("ECL-1.0"), t.lit("ECL-2.0"), t.lit("EFL-1.0"), t.lit("EFL-2.0"), t.lit("eGenix"), t.lit("Elastic-2.0"), t.lit("Entessa"), t.lit("EPICS"), t.lit("EPL-1.0"), t.lit("EPL-2.0"), t.lit("ErlPL-1.1"), t.lit("etalab-2.0"), t.lit("EUDatagrid"), t.lit("EUPL-1.0"), t.lit("EUPL-1.1"), t.lit("EUPL-1.2"), t.lit("Eurosym"), t.lit("Fair"), t.lit("FDK-AAC"), t.lit("Frameworx-1.0"), t.lit("FreeBSD-DOC"), t.lit("FreeImage"), t.lit("FSFAP"), t.lit("FSFUL"), t.lit("FSFULLR"), t.lit("FSFULLRWD"), t.lit("FTL"), t.lit("GD"), t.lit("GFDL-1.1-invariants-only"), t.lit("GFDL-1.1-invariants-or-later"), t.lit("GFDL-1.1-no-invariants-only"), t.lit("GFDL-1.1-no-invariants-or-later"), t.lit("GFDL-1.1-only"), t.lit("GFDL-1.1-or-later"), t.lit("GFDL-1.2-invariants-only"), t.lit("GFDL-1.2-invariants-or-later"), t.lit("GFDL-1.2-no-invariants-only"), t.lit("GFDL-1.2-no-invariants-or-later"), t.lit("GFDL-1.2-only"), t.lit("GFDL-1.2-or-later"), t.lit("GFDL-1.3-invariants-only"), t.lit("GFDL-1.3-invariants-or-later"), t.lit("GFDL-1.3-no-invariants-only"), t.lit("GFDL-1.3-no-invariants-or-later"), t.lit("GFDL-1.3-only"), t.lit("GFDL-1.3-or-later"), t.lit("Giftware"), t.lit("GL2PS"), t.lit("Glide"), t.lit("Glulxe"), t.lit("GLWTPL"), t.lit("gnuplot"), t.lit("GPL-1.0-only"), t.lit("GPL-1.0-or-later"), t.lit("GPL-2.0-only"), t.lit("GPL-2.0-or-later"), t.lit("GPL-3.0-only"), t.lit("GPL-3.0-or-later"), t.lit("Graphics-Gems"), t.lit("gSOAP-1.3b"), t.lit("HaskellReport"), t.lit("Hippocratic-2.1"), t.lit("HP-1986"), t.lit("HPND"), t.lit("HPND-export-US"), t.lit("HPND-Markus-Kuhn"), t.lit("HPND-sell-variant"), t.lit("HPND-sell-variant-MIT-disclaimer"), t.lit("HTMLTIDY"), t.lit("IBM-pibs"), t.lit("ICU"), t.lit("IEC-Code-Components-EULA"), t.lit("IJG"), t.lit("IJG-short"), t.lit("ImageMagick"), t.lit("iMatix"), t.lit("Imlib2"), t.lit("Info-ZIP"), t.lit("Intel"), t.lit("Intel-ACPI"), t.lit("Interbase-1.0"), t.lit("IPA"), t.lit("IPL-1.0"), t.lit("ISC"), t.lit("Jam"), t.lit("JasPer-2.0"), t.lit("JPL-image"), t.lit("JPNIC"), t.lit("JSON"), t.lit("Kazlib"), t.lit("Knuth-CTAN"), t.lit("LAL-1.2"), t.lit("LAL-1.3"), t.lit("Latex2e"), t.lit("Leptonica"), t.lit("LGPL-2.0-only"), t.lit("LGPL-2.0-or-later"), t.lit("LGPL-2.1-only"), t.lit("LGPL-2.1-or-later"), t.lit("LGPL-3.0-only"), t.lit("LGPL-3.0-or-later"), t.lit("LGPLLR"), t.lit("Libpng"), t.lit("libpng-2.0"), t.lit("libselinux-1.0"), t.lit("libtiff"), t.lit("libutil-David-Nugent"), t.lit("LiLiQ-P-1.1"), t.lit("LiLiQ-R-1.1"), t.lit("LiLiQ-Rplus-1.1"), t.lit("Linux-man-pages-copyleft"), t.lit("Linux-OpenIB"), t.lit("LOOP"), t.lit("LPL-1.0"), t.lit("LPL-1.02"), t.lit("LPPL-1.0"), t.lit("LPPL-1.1"), t.lit("LPPL-1.2"), t.lit("LPPL-1.3a"), t.lit("LPPL-1.3c"), t.lit("LZMA-SDK-9.11-to-9.20"), t.lit("LZMA-SDK-9.22"), t.lit("MakeIndex"), t.lit("Martin-Birgmeier"), t.lit("Minpack"), t.lit("MirOS"), t.lit("MIT"), t.lit("MIT-0"), t.lit("MIT-advertising"), t.lit("MIT-CMU"), t.lit("MIT-enna"), t.lit("MIT-feh"), t.lit("MIT-Modern-Variant"), t.lit("MIT-open-group"), t.lit("MIT-Wu"), t.lit("MITNFA"), t.lit("Motosoto"), t.lit("mpi-permissive"), t.lit("mpich2"), t.lit("MPL-1.0"), t.lit("MPL-1.1"), t.lit("MPL-2.0"), t.lit("MPL-2.0-no-copyleft-exception"), t.lit("mplus"), t.lit("MS-LPL"), t.lit("MS-PL"), t.lit("MS-RL"), t.lit("MTLL"), t.lit("MulanPSL-1.0"), t.lit("MulanPSL-2.0"), t.lit("Multics"), t.lit("Mup"), t.lit("NAIST-2003"), t.lit("NASA-1.3"), t.lit("Naumen"), t.lit("NBPL-1.0"), t.lit("NCGL-UK-2.0"), t.lit("NCSA"), t.lit("Net-SNMP"), t.lit("NetCDF"), t.lit("Newsletr"), t.lit("NGPL"), t.lit("NICTA-1.0"), t.lit("NIST-PD"), t.lit("NIST-PD-fallback"), t.lit("NLOD-1.0"), t.lit("NLOD-2.0"), t.lit("NLPL"), t.lit("Nokia"), t.lit("NOSL"), t.lit("Noweb"), t.lit("NPL-1.0"), t.lit("NPL-1.1"), t.lit("NPOSL-3.0"), t.lit("NRL"), t.lit("NTP"), t.lit("NTP-0"), t.lit("O-UDA-1.0"), t.lit("OCCT-PL"), t.lit("OCLC-2.0"), t.lit("ODbL-1.0"), t.lit("ODC-By-1.0"), t.lit("OFFIS"), t.lit("OFL-1.0"), t.lit("OFL-1.0-no-RFN"), t.lit("OFL-1.0-RFN"), t.lit("OFL-1.1"), t.lit("OFL-1.1-no-RFN"), t.lit("OFL-1.1-RFN"), t.lit("OGC-1.0"), t.lit("OGDL-Taiwan-1.0"), t.lit("OGL-Canada-2.0"), t.lit("OGL-UK-1.0"), t.lit("OGL-UK-2.0"), t.lit("OGL-UK-3.0"), t.lit("OGTSL"), t.lit("OLDAP-1.1"), t.lit("OLDAP-1.2"), t.lit("OLDAP-1.3"), t.lit("OLDAP-1.4"), t.lit("OLDAP-2.0"), t.lit("OLDAP-2.0.1"), t.lit("OLDAP-2.1"), t.lit("OLDAP-2.2"), t.lit("OLDAP-2.2.1"), t.lit("OLDAP-2.2.2"), t.lit("OLDAP-2.3"), t.lit("OLDAP-2.4"), t.lit("OLDAP-2.5"), t.lit("OLDAP-2.6"), t.lit("OLDAP-2.7"), t.lit("OLDAP-2.8"), t.lit("OML"), t.lit("OpenPBS-2.3"), t.lit("OpenSSL"), t.lit("OPL-1.0"), t.lit("OPUBL-1.0"), t.lit("OSET-PL-2.1"), t.lit("OSL-1.0"), t.lit("OSL-1.1"), t.lit("OSL-2.0"), t.lit("OSL-2.1"), t.lit("OSL-3.0"), t.lit("Parity-6.0.0"), t.lit("Parity-7.0.0"), t.lit("PDDL-1.0"), t.lit("PHP-3.0"), t.lit("PHP-3.01"), t.lit("Plexus"), t.lit("PolyForm-Noncommercial-1.0.0"), t.lit("PolyForm-Small-Business-1.0.0"), t.lit("PostgreSQL"), t.lit("PSF-2.0"), t.lit("psfrag"), t.lit("psutils"), t.lit("Python-2.0"), t.lit("Python-2.0.1"), t.lit("Qhull"), t.lit("QPL-1.0"), t.lit("QPL-1.0-INRIA-2004"), t.lit("Rdisc"), t.lit("RHeCos-1.1"), t.lit("RPL-1.1"), t.lit("RPL-1.5"), t.lit("RPSL-1.0"), t.lit("RSA-MD"), t.lit("RSCPL"), t.lit("Ruby"), t.lit("SAX-PD"), t.lit("Saxpath"), t.lit("SCEA"), t.lit("SchemeReport"), t.lit("Sendmail"), t.lit("Sendmail-8.23"), t.lit("SGI-B-1.0"), t.lit("SGI-B-1.1"), t.lit("SGI-B-2.0"), t.lit("SHL-0.5"), t.lit("SHL-0.51"), t.lit("SimPL-2.0"), t.lit("SISSL"), t.lit("SISSL-1.2"), t.lit("Sleepycat"), t.lit("SMLNJ"), t.lit("SMPPL"), t.lit("SNIA"), t.lit("snprintf"), t.lit("Spencer-86"), t.lit("Spencer-94"), t.lit("Spencer-99"), t.lit("SPL-1.0"), t.lit("SSH-OpenSSH"), t.lit("SSH-short"), t.lit("SSPL-1.0"), t.lit("SugarCRM-1.1.3"), t.lit("SunPro"), t.lit("SWL"), t.lit("Symlinks"), t.lit("TAPR-OHL-1.0"), t.lit("TCL"), t.lit("TCP-wrappers"), t.lit("TMate"), t.lit("TORQUE-1.1"), t.lit("TOSL"), t.lit("TPDL"), t.lit("TPL-1.0"), t.lit("TTWL"), t.lit("TU-Berlin-1.0"), t.lit("TU-Berlin-2.0"), t.lit("UCAR"), t.lit("UCL-1.0"), t.lit("Unicode-DFS-2015"), t.lit("Unicode-DFS-2016"), t.lit("Unicode-TOU"), t.lit("Unlicense"), t.lit("UPL-1.0"), t.lit("Vim"), t.lit("VOSTROM"), t.lit("VSL-1.0"), t.lit("W3C"), t.lit("W3C-19980720"), t.lit("W3C-20150513"), t.lit("w3m"), t.lit("Watcom-1.0"), t.lit("Wsuipa"), t.lit("WTFPL"), t.lit("X11"), t.lit("X11-distribute-modifications-variant"), t.lit("Xerox"), t.lit("XFree86-1.1"), t.lit("xinetd"), t.lit("xlock"), t.lit("Xnet"), t.lit("xpp"), t.lit("XSkat"), t.lit("YPL-1.0"), t.lit("YPL-1.1"), t.lit("Zed"), t.lit("Zend-2.0"), t.lit("Zimbra-1.3"), t.lit("Zimbra-1.4"), t.lit("Zlib"), t.lit("zlib-acknowledgement"), t.lit("ZPL-1.1"), t.lit("ZPL-2.0"), t.lit("ZPL-2.1"));

export const Name = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const Operator = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const PrivacyURL = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const RentalApps = t.iface([], {
  "android": t.opt("Android"),
  "ios": t.opt("Ios"),
  [t.indexKey]: "any",
});

export const Android = t.iface([], {
  "discovery_uri": "string",
  "store_uri": "string",
  [t.indexKey]: "any",
});

export const Ios = t.iface([], {
  "discovery_uri": "string",
  "store_uri": "string",
  [t.indexKey]: "any",
});

export const ShortName = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const TermsURL = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const Timezone = t.union(t.lit("Africa/Abidjan"), t.lit("Africa/Algiers"), t.lit("Africa/Bissau"), t.lit("Africa/Cairo"), t.lit("Africa/Casablanca"), t.lit("Africa/Ceuta"), t.lit("Africa/El_Aaiun"), t.lit("Africa/Johannesburg"), t.lit("Africa/Juba"), t.lit("Africa/Khartoum"), t.lit("Africa/Lagos"), t.lit("Africa/Maputo"), t.lit("Africa/Monrovia"), t.lit("Africa/Nairobi"), t.lit("Africa/Ndjamena"), t.lit("Africa/Sao_Tome"), t.lit("Africa/Tripoli"), t.lit("Africa/Tunis"), t.lit("Africa/Windhoek"), t.lit("America/Adak"), t.lit("America/Anchorage"), t.lit("America/Araguaina"), t.lit("America/Argentina/Buenos_Aires"), t.lit("America/Argentina/Catamarca"), t.lit("America/Argentina/Cordoba"), t.lit("America/Argentina/Jujuy"), t.lit("America/Argentina/La_Rioja"), t.lit("America/Argentina/Mendoza"), t.lit("America/Argentina/Rio_Gallegos"), t.lit("America/Argentina/Salta"), t.lit("America/Argentina/San_Juan"), t.lit("America/Argentina/San_Luis"), t.lit("America/Argentina/Tucuman"), t.lit("America/Argentina/Ushuaia"), t.lit("America/Asuncion"), t.lit("America/Bahia"), t.lit("America/Bahia_Banderas"), t.lit("America/Barbados"), t.lit("America/Belem"), t.lit("America/Belize"), t.lit("America/Boa_Vista"), t.lit("America/Bogota"), t.lit("America/Boise"), t.lit("America/Cambridge_Bay"), t.lit("America/Campo_Grande"), t.lit("America/Cancun"), t.lit("America/Caracas"), t.lit("America/Cayenne"), t.lit("America/Chicago"), t.lit("America/Chihuahua"), t.lit("America/Costa_Rica"), t.lit("America/Cuiaba"), t.lit("America/Danmarkshavn"), t.lit("America/Dawson"), t.lit("America/Dawson_Creek"), t.lit("America/Denver"), t.lit("America/Detroit"), t.lit("America/Edmonton"), t.lit("America/Eirunepe"), t.lit("America/El_Salvador"), t.lit("America/Fort_Nelson"), t.lit("America/Fortaleza"), t.lit("America/Glace_Bay"), t.lit("America/Goose_Bay"), t.lit("America/Grand_Turk"), t.lit("America/Guatemala"), t.lit("America/Guayaquil"), t.lit("America/Guyana"), t.lit("America/Halifax"), t.lit("America/Havana"), t.lit("America/Hermosillo"), t.lit("America/Indiana/Indianapolis"), t.lit("America/Indiana/Knox"), t.lit("America/Indiana/Marengo"), t.lit("America/Indiana/Petersburg"), t.lit("America/Indiana/Tell_City"), t.lit("America/Indiana/Vevay"), t.lit("America/Indiana/Vincennes"), t.lit("America/Indiana/Winamac"), t.lit("America/Inuvik"), t.lit("America/Iqaluit"), t.lit("America/Jamaica"), t.lit("America/Juneau"), t.lit("America/Kentucky/Louisville"), t.lit("America/Kentucky/Monticello"), t.lit("America/La_Paz"), t.lit("America/Lima"), t.lit("America/Los_Angeles"), t.lit("America/Maceio"), t.lit("America/Managua"), t.lit("America/Manaus"), t.lit("America/Martinique"), t.lit("America/Matamoros"), t.lit("America/Mazatlan"), t.lit("America/Menominee"), t.lit("America/Merida"), t.lit("America/Metlakatla"), t.lit("America/Mexico_City"), t.lit("America/Miquelon"), t.lit("America/Moncton"), t.lit("America/Monterrey"), t.lit("America/Montevideo"), t.lit("America/New_York"), t.lit("America/Nipigon"), t.lit("America/Nome"), t.lit("America/Noronha"), t.lit("America/North_Dakota/Beulah"), t.lit("America/North_Dakota/Center"), t.lit("America/North_Dakota/New_Salem"), t.lit("America/Nuuk"), t.lit("America/Ojinaga"), t.lit("America/Panama"), t.lit("America/Pangnirtung"), t.lit("America/Paramaribo"), t.lit("America/Phoenix"), t.lit("America/Port-au-Prince"), t.lit("America/Porto_Velho"), t.lit("America/Puerto_Rico"), t.lit("America/Punta_Arenas"), t.lit("America/Rainy_River"), t.lit("America/Rankin_Inlet"), t.lit("America/Recife"), t.lit("America/Regina"), t.lit("America/Resolute"), t.lit("America/Rio_Branco"), t.lit("America/Santarem"), t.lit("America/Santiago"), t.lit("America/Santo_Domingo"), t.lit("America/Sao_Paulo"), t.lit("America/Scoresbysund"), t.lit("America/Sitka"), t.lit("America/St_Johns"), t.lit("America/Swift_Current"), t.lit("America/Tegucigalpa"), t.lit("America/Thule"), t.lit("America/Thunder_Bay"), t.lit("America/Tijuana"), t.lit("America/Toronto"), t.lit("America/Vancouver"), t.lit("America/Whitehorse"), t.lit("America/Winnipeg"), t.lit("America/Yakutat"), t.lit("America/Yellowknife"), t.lit("Antarctica/Casey"), t.lit("Antarctica/Davis"), t.lit("Antarctica/Macquarie"), t.lit("Antarctica/Mawson"), t.lit("Antarctica/Palmer"), t.lit("Antarctica/Rothera"), t.lit("Antarctica/Troll"), t.lit("Antarctica/Vostok"), t.lit("Asia/Almaty"), t.lit("Asia/Amman"), t.lit("Asia/Anadyr"), t.lit("Asia/Aqtau"), t.lit("Asia/Aqtobe"), t.lit("Asia/Ashgabat"), t.lit("Asia/Atyrau"), t.lit("Asia/Baghdad"), t.lit("Asia/Baku"), t.lit("Asia/Bangkok"), t.lit("Asia/Barnaul"), t.lit("Asia/Beirut"), t.lit("Asia/Bishkek"), t.lit("Asia/Brunei"), t.lit("Asia/Chita"), t.lit("Asia/Choibalsan"), t.lit("Asia/Colombo"), t.lit("Asia/Damascus"), t.lit("Asia/Dhaka"), t.lit("Asia/Dili"), t.lit("Asia/Dubai"), t.lit("Asia/Dushanbe"), t.lit("Asia/Famagusta"), t.lit("Asia/Gaza"), t.lit("Asia/Hebron"), t.lit("Asia/Ho_Chi_Minh"), t.lit("Asia/Hong_Kong"), t.lit("Asia/Hovd"), t.lit("Asia/Irkutsk"), t.lit("Asia/Jakarta"), t.lit("Asia/Jayapura"), t.lit("Asia/Jerusalem"), t.lit("Asia/Kabul"), t.lit("Asia/Kamchatka"), t.lit("Asia/Karachi"), t.lit("Asia/Kathmandu"), t.lit("Asia/Khandyga"), t.lit("Asia/Kolkata"), t.lit("Asia/Krasnoyarsk"), t.lit("Asia/Kuala_Lumpur"), t.lit("Asia/Kuching"), t.lit("Asia/Macau"), t.lit("Asia/Magadan"), t.lit("Asia/Makassar"), t.lit("Asia/Manila"), t.lit("Asia/Nicosia"), t.lit("Asia/Novokuznetsk"), t.lit("Asia/Novosibirsk"), t.lit("Asia/Omsk"), t.lit("Asia/Oral"), t.lit("Asia/Pontianak"), t.lit("Asia/Pyongyang"), t.lit("Asia/Qatar"), t.lit("Asia/Qostanay"), t.lit("Asia/Qyzylorda"), t.lit("Asia/Riyadh"), t.lit("Asia/Sakhalin"), t.lit("Asia/Samarkand"), t.lit("Asia/Seoul"), t.lit("Asia/Shanghai"), t.lit("Asia/Singapore"), t.lit("Asia/Srednekolymsk"), t.lit("Asia/Taipei"), t.lit("Asia/Tashkent"), t.lit("Asia/Tbilisi"), t.lit("Asia/Tehran"), t.lit("Asia/Thimphu"), t.lit("Asia/Tokyo"), t.lit("Asia/Tomsk"), t.lit("Asia/Ulaanbaatar"), t.lit("Asia/Urumqi"), t.lit("Asia/Ust-Nera"), t.lit("Asia/Vladivostok"), t.lit("Asia/Yakutsk"), t.lit("Asia/Yangon"), t.lit("Asia/Yekaterinburg"), t.lit("Asia/Yerevan"), t.lit("Atlantic/Azores"), t.lit("Atlantic/Bermuda"), t.lit("Atlantic/Canary"), t.lit("Atlantic/Cape_Verde"), t.lit("Atlantic/Faroe"), t.lit("Atlantic/Madeira"), t.lit("Atlantic/Reykjavik"), t.lit("Atlantic/South_Georgia"), t.lit("Atlantic/Stanley"), t.lit("Australia/Adelaide"), t.lit("Australia/Brisbane"), t.lit("Australia/Broken_Hill"), t.lit("Australia/Darwin"), t.lit("Australia/Eucla"), t.lit("Australia/Hobart"), t.lit("Australia/Lindeman"), t.lit("Australia/Lord_Howe"), t.lit("Australia/Melbourne"), t.lit("Australia/Perth"), t.lit("Australia/Sydney"), t.lit("CET"), t.lit("CST6CDT"), t.lit("EET"), t.lit("EST"), t.lit("EST5EDT"), t.lit("Etc/GMT"), t.lit("Etc/GMT-1"), t.lit("Etc/GMT-10"), t.lit("Etc/GMT-11"), t.lit("Etc/GMT-12"), t.lit("Etc/GMT-13"), t.lit("Etc/GMT-14"), t.lit("Etc/GMT-2"), t.lit("Etc/GMT-3"), t.lit("Etc/GMT-4"), t.lit("Etc/GMT-5"), t.lit("Etc/GMT-6"), t.lit("Etc/GMT-7"), t.lit("Etc/GMT-8"), t.lit("Etc/GMT-9"), t.lit("Etc/GMT+1"), t.lit("Etc/GMT+10"), t.lit("Etc/GMT+11"), t.lit("Etc/GMT+12"), t.lit("Etc/GMT+2"), t.lit("Etc/GMT+3"), t.lit("Etc/GMT+4"), t.lit("Etc/GMT+5"), t.lit("Etc/GMT+6"), t.lit("Etc/GMT+7"), t.lit("Etc/GMT+8"), t.lit("Etc/GMT+9"), t.lit("Etc/UTC"), t.lit("Europe/Amsterdam"), t.lit("Europe/Andorra"), t.lit("Europe/Astrakhan"), t.lit("Europe/Athens"), t.lit("Europe/Belgrade"), t.lit("Europe/Berlin"), t.lit("Europe/Brussels"), t.lit("Europe/Bucharest"), t.lit("Europe/Budapest"), t.lit("Europe/Chisinau"), t.lit("Europe/Copenhagen"), t.lit("Europe/Dublin"), t.lit("Europe/Gibraltar"), t.lit("Europe/Helsinki"), t.lit("Europe/Istanbul"), t.lit("Europe/Kaliningrad"), t.lit("Europe/Kiev"), t.lit("Europe/Kirov"), t.lit("Europe/Lisbon"), t.lit("Europe/London"), t.lit("Europe/Luxembourg"), t.lit("Europe/Madrid"), t.lit("Europe/Malta"), t.lit("Europe/Minsk"), t.lit("Europe/Monaco"), t.lit("Europe/Moscow"), t.lit("Europe/Oslo"), t.lit("Europe/Paris"), t.lit("Europe/Prague"), t.lit("Europe/Riga"), t.lit("Europe/Rome"), t.lit("Europe/Samara"), t.lit("Europe/Saratov"), t.lit("Europe/Simferopol"), t.lit("Europe/Sofia"), t.lit("Europe/Stockholm"), t.lit("Europe/Tallinn"), t.lit("Europe/Tirane"), t.lit("Europe/Ulyanovsk"), t.lit("Europe/Uzhgorod"), t.lit("Europe/Vienna"), t.lit("Europe/Vilnius"), t.lit("Europe/Volgograd"), t.lit("Europe/Warsaw"), t.lit("Europe/Zaporozhye"), t.lit("Europe/Zurich"), t.lit("HST"), t.lit("Indian/Chagos"), t.lit("Indian/Christmas"), t.lit("Indian/Cocos"), t.lit("Indian/Kerguelen"), t.lit("Indian/Mahe"), t.lit("Indian/Maldives"), t.lit("Indian/Mauritius"), t.lit("Indian/Reunion"), t.lit("MET"), t.lit("MST"), t.lit("MST7MDT"), t.lit("Pacific/Apia"), t.lit("Pacific/Auckland"), t.lit("Pacific/Bougainville"), t.lit("Pacific/Chatham"), t.lit("Pacific/Chuuk"), t.lit("Pacific/Easter"), t.lit("Pacific/Efate"), t.lit("Pacific/Fakaofo"), t.lit("Pacific/Fiji"), t.lit("Pacific/Funafuti"), t.lit("Pacific/Galapagos"), t.lit("Pacific/Gambier"), t.lit("Pacific/Guadalcanal"), t.lit("Pacific/Guam"), t.lit("Pacific/Honolulu"), t.lit("Pacific/Kanton"), t.lit("Pacific/Kiritimati"), t.lit("Pacific/Kosrae"), t.lit("Pacific/Kwajalein"), t.lit("Pacific/Majuro"), t.lit("Pacific/Marquesas"), t.lit("Pacific/Nauru"), t.lit("Pacific/Niue"), t.lit("Pacific/Norfolk"), t.lit("Pacific/Noumea"), t.lit("Pacific/Pago_Pago"), t.lit("Pacific/Palau"), t.lit("Pacific/Pitcairn"), t.lit("Pacific/Pohnpei"), t.lit("Pacific/Port_Moresby"), t.lit("Pacific/Rarotonga"), t.lit("Pacific/Tahiti"), t.lit("Pacific/Tarawa"), t.lit("Pacific/Tongatapu"), t.lit("Pacific/Wake"), t.lit("Pacific/Wallis"), t.lit("PST8PDT"), t.lit("WET"));

export const Version = t.lit("3.0");

const exportedTypeSuite: t.ITypeSuite = {
  SystemInformation,
  Data,
  AttributionOrganizationName,
  BrandAssets,
  LicenseID,
  Name,
  Operator,
  PrivacyURL,
  RentalApps,
  Android,
  Ios,
  ShortName,
  TermsURL,
  Timezone,
  Version,
};
export default exportedTypeSuite;
