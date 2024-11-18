import { z } from "zod";

const TLPFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  typeOfTlp: z.string({
    invalid_type_error: "Please select type of TLP",
  }),
  doorCondition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["available", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  circuitDiagram: z.enum(["available", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  latitude: z.string(),
  logitude: z.string(),
});

const WarningBoardFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  typeOfWarningBoard: z.enum(
    ["roadCrossing", "riverCrossing", "railwayCrossing"],
    {
      invalid_type_error: "Please select an appropriate option.",
    }
  ),
  details: z.string(),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
});

const KMPostFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
});

const OFCMarkerFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
});

const TurningMarkerFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
});

const CautionBoardFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
});

const ROUMarkerFormSchema = z.object({
  ch: z.coerce.number({
    invalid_type_error: "Please enter the ch value.",
  }),
  status: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  statusInfo: z.string(),
  condition: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  rustingCondition: z.enum(["notRusted", "minorRusted", "heavyRusted"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  foundationStatus: z.enum(["ok", "notOk"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsStatus: z.enum(["shredded", "ok", "notAvailable"], {
    invalid_type_error: "Please select an appropriate option.",
  }),
  detailsInfo: z.string(),
  latitude: z.string(),
  logitude: z.string(),
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
