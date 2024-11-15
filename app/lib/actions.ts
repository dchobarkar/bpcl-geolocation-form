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

export async function createTLPInput(formData: FormData) {
  const {
    ch,
    typeOfTlp,
    doorCondition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    circuitDiagram,
  } = TLPFormSchema.parse({
    ch: formData.get("ch"),
    typeOfTlp: formData.get("typeOfTlp"),
    doorCondition: formData.get("doorCondition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    circuitDiagram: formData.get("circuitDiagram"),
  });

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

export async function createWarningBoardInput(formData: FormData) {
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
  } = WarningBoardFormSchema.parse({
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

export async function createKMPostInput(formData: FormData) {
  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = KMPostFormSchema.parse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });

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

export async function createOFCMarkerInput(formData: FormData) {
  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = OFCMarkerFormSchema.parse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });

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

export async function createTurningMarkerInput(formData: FormData) {
  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = TurningMarkerFormSchema.parse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });

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

export async function createCautionBoardInput(formData: FormData) {
  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = CautionBoardFormSchema.parse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });

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

export async function createROUMarkerInput(formData: any) {
  const {
    ch,
    status,
    statusInfo,
    condition,
    rustingCondition,
    foundationStatus,
    detailsStatus,
    detailsInfo,
  } = ROUMarkerFormSchema.parse({
    ch: formData.get("ch"),
    status: formData.get("status"),
    statusInfo: formData.get("statusInfo"),
    condition: formData.get("condition"),
    rustingCondition: formData.get("rustingCondition"),
    foundationStatus: formData.get("foundationStatus"),
    detailsStatus: formData.get("detailsStatus"),
    detailsInfo: formData.get("detailsInfo"),
  });

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
