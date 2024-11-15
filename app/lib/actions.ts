"use server";

import {
  CautionBoardFormSchema,
  KMPostFormSchema,
  OFCMarkerFormSchema,
  ROUMarkerFormSchema,
  TLPFormSchema,
  TurningMarkerFormSchema,
  WarningBoardFormSchema,
} from "./formScema";
import {
  CautionBoardFormState,
  KMPostFormState,
  OFCMarkerFormState,
  ROUMarkerFormState,
  TLPFormState,
  TurningMarkerFormState,
  WarningBoardFormState,
} from "./formState";

export async function createTLPInput(
  prevState: TLPFormState,
  formData: FormData
) {
  const validatedFields = TLPFormSchema.safeParse({
    ch: formData.get("ch"),
    typeOfTlp: formData.get("typeOfTlp"),
    doorCondition: formData.get("doorCondition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    circuitDiagram: formData.get("circuitDiagram"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    typeOfTlp,
    doorCondition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    circuitDiagram,
  } = validatedFields.data;
  console.log(
    ch,
    typeOfTlp,
    doorCondition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    circuitDiagram
  );

  return formData;
}

export async function createWarningBoardInput(
  prevState: WarningBoardFormState,
  formData: FormData
) {
  const validatedFields = WarningBoardFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    typeOfWarningBoard: formData.get("typeOfWarningBoard"),
    details: formData.get("details"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    typeOfWarningBoard,
    details,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    typeOfWarningBoard,
    details,
    detailsStatus,
    detailsInfo
  );

  return formData;
}

export async function createKMPostInput(
  prevState: KMPostFormState,
  formData: FormData
) {
  const validatedFields = KMPostFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo
  );

  return formData;
}

export async function createOFCMarkerInput(
  prevState: OFCMarkerFormState,
  formData: FormData
) {
  const validatedFields = OFCMarkerFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo
  );

  return formData;
}

export async function createTurningMarkerInput(
  prevState: TurningMarkerFormState,
  formData: FormData
) {
  const validatedFields = TurningMarkerFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo
  );

  return formData;
}

export async function createCautionBoardInput(
  prevState: CautionBoardFormState,
  formData: FormData
) {
  const validatedFields = CautionBoardFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo
  );

  return formData;
}

export async function createROUMarkerInput(
  prevState: ROUMarkerFormState,
  formData: FormData
) {
  const validatedFields = ROUMarkerFormSchema.safeParse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });
  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create entry.",
    };

  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = validatedFields.data;
  console.log(
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo
  );

  return formData;
}
