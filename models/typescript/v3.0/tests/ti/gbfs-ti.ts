/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const Gbfs = t.iface([], {
  "data": "Data",
  "last_updated": "string",
  "ttl": "number",
  "version": "Version",
});

export const Data = t.iface([], {
  "feeds": t.array("Feed"),
  [t.indexKey]: "any",
});

export const Feed = t.iface([], {
  "name": "Name",
  "url": "string",
  [t.indexKey]: "any",
});

export const Name = t.union(t.lit("gbfs"), t.lit("gbfs_versions"), t.lit("system_information"), t.lit("vehicle_types"), t.lit("station_information"), t.lit("station_status"), t.lit("vehicle_status"), t.lit("system_alerts"), t.lit("system_regions"), t.lit("system_pricing_plans"), t.lit("geofencing_zones"));

export const Version = t.lit("3.0");

const exportedTypeSuite: t.ITypeSuite = {
  Gbfs,
  Data,
  Feed,
  Name,
  Version,
};
export default exportedTypeSuite;
