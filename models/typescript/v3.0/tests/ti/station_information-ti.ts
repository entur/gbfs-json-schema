/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const StationInformation = t.iface([], {
  "data": "Data",
  "last_updated": "string",
  "ttl": "number",
  "version": "Version",
  [t.indexKey]: "any",
});

export const Data = t.iface([], {
  "stations": t.array("Station"),
  [t.indexKey]: "any",
});

export const Station = t.iface([], {
  "address": t.opt("string"),
  "capacity": t.opt("number"),
  "contact_phone": t.opt("string"),
  "cross_street": t.opt("string"),
  "is_charging_station": t.opt("boolean"),
  "is_valet_station": t.opt("boolean"),
  "is_virtual_station": t.opt("boolean"),
  "lat": "number",
  "lon": "number",
  "name": t.array("Name"),
  "parking_hoop": t.opt("boolean"),
  "parking_type": t.opt("ParkingType"),
  "post_code": t.opt("string"),
  "region_id": t.opt("string"),
  "rental_methods": t.opt(t.array("RentalMethod")),
  "rental_uris": t.opt("RentalUris"),
  "short_name": t.opt(t.array("ShortName")),
  "station_area": t.opt("StationArea"),
  "station_id": "string",
  "station_opening_hours": t.opt("string"),
  "vehicle_docks_capacity": t.opt(t.array("VehicleDocksCapacity")),
  "vehicle_types_capacity": t.opt(t.array("VehicleTypesCapacity")),
  [t.indexKey]: "any",
});

export const Name = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const ParkingType = t.union(t.lit("parking_lot"), t.lit("street_parking"), t.lit("underground_parking"), t.lit("sidewalk_parking"), t.lit("other"));

export const RentalMethod = t.union(t.lit("key"), t.lit("creditcard"), t.lit("paypass"), t.lit("applepay"), t.lit("androidpay"), t.lit("transitcard"), t.lit("accountnumber"), t.lit("phone"));

export const RentalUris = t.iface([], {
  "android": t.opt("string"),
  "ios": t.opt("string"),
  "web": t.opt("string"),
  [t.indexKey]: "any",
});

export const ShortName = t.iface([], {
  "language": "string",
  "text": "string",
  [t.indexKey]: "any",
});

export const StationArea = t.iface([], {
  "coordinates": t.array(t.array(t.array(t.array("number")))),
  "type": "Type",
  [t.indexKey]: "any",
});

export const Type = t.lit("MultiPolygon");

export const VehicleDocksCapacity = t.iface([], {
  "count": "number",
  "vehicle_type_ids": t.array("string"),
  [t.indexKey]: "any",
});

export const VehicleTypesCapacity = t.iface([], {
  "count": "number",
  "vehicle_type_ids": t.array("string"),
  [t.indexKey]: "any",
});

export const Version = t.lit("3.0");

const exportedTypeSuite: t.ITypeSuite = {
  StationInformation,
  Data,
  Station,
  Name,
  ParkingType,
  RentalMethod,
  RentalUris,
  ShortName,
  StationArea,
  Type,
  VehicleDocksCapacity,
  VehicleTypesCapacity,
  Version,
};
export default exportedTypeSuite;
