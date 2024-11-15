type TLPFormState = {
  errors?: {
    ch?: string[];
    typeOfTlp?: string[];
    doorCondition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    circuitDiagram?: string[];
  };
  message?: string | null;
};

type WarningBoardFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    typeOfWarningBoard?: string[];
    details?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

type KMPostFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

type OFCMarkerFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

type TurningMarkerFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

type CautionBoardFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

type ROUMarkerFormState = {
  errors?: {
    ch?: string[];
    status?: string[];
    statusInfo?: string[];
    condition?: string[];
    rustingCondition?: string[];
    foundationStatus?: string[];
    detailsStatus?: string[];
    detailsInfo?: string[];
  };
  message?: string | null;
};

export type {
  TLPFormState,
  WarningBoardFormState,
  KMPostFormState,
  OFCMarkerFormState,
  TurningMarkerFormState,
  CautionBoardFormState,
  ROUMarkerFormState,
};
