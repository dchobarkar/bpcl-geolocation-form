import { z } from "zod";

const TLPFormSchema = z.object({
  ch: z.coerce.number(),
  typeOfTlp: z.string(),
  doorCondition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["available", "notAvailable"]),
  circuitDiagram: z.enum(["available", "notAvailable"]),
});

const WarningBoardFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  typeOfWarningBoard: z.enum([
    "roadCrossing",
    "riverCrossing",
    "railwayCrossing",
  ]),
  details: z.string(),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

const KMPostFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

const OFCMarkerFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

const TurningMarkerFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

const CautionBoardFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

const ROUMarkerFormSchema = z.object({
  ch: z.coerce.number(),
  status: z.enum(["ok", "notOk"]),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"]),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"]),
  foundationStatus: z.enum(["ok", "notOk"]),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"]),
  detailsInfo: z.string(),
});

export {
  TLPFormSchema,
  WarningBoardFormSchema,
  KMPostFormSchema,
  OFCMarkerFormSchema,
  TurningMarkerFormSchema,
  CautionBoardFormSchema,
  ROUMarkerFormSchema,
};
