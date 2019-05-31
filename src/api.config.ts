import { environment } from "./environments/environment";
// import { SbmConstant } from "/app/common/sbm.constant";
// export const MOCK_API: string = environment.apiUrl;
// export const BASE_URL: string = environment.apiUrl;
export const IMPORT_PATH: string = "/api/import";
export const SECURITY_PATH: string = "/api/security/v1";
export const EXPORT_PATH: string = "/api/export";
export const BASE_PATH: string = "/api/rest";
export const REPORT_PATH: string = BASE_PATH;

export const PAGE_SIZES: number[] = [10, 50, 100, 200, 500, 1000];
export const SBM_GLOBAL_VARIABLE: any = {
  gstInNumber: 15,
  pincode: 6,
  entityName: 50,
  textBoxMaxLength: 100,
  smallTextBoxMaxLength: 30,
  panMaxLength: 10,
  maxLengthForMobileNumber: 10,
  telephoneNumberLength: 15,
  maxLength: 10,
  maxLengthForString: 255,
//   maxLengthForLabel:A 100,
  minLengthForHsncode: 4,
  maxLengthForHsncode: 8,
  maxLengthForIECNumber: 10,
  
  ADmaxLengthForPAN: 10,
  maxLengthForIFSC: 11,
  maxLengthForAadhar: 12,
  reconcileWithImort: false,
  allowDuplicateProductServiceOnInvoice: true,
  gstnRegex:
    "[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Zz1-9A-Ja-j]{1}[0-9a-zA-Z]{1}",
  emailRegex:
    "^$|(^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@.+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$)",
  websiteRegex:
    "^(http:\\/\\/www.|https:\\/\\/www.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
  numbersOnlyRegx: "^\\d+$",
  mobileNumberRegex: "^\\d{10}$",
  CINRegex: "[U|L]{1}\\d{5}[A-Z]{2}\\d{4}[A-Z]{3}\\d{6}",
  LLPINRegex: "[A-Z]{3}\\d{4}",
  PANNumberRegex: "^$|[A-Z]{5}\\d{4}[A-Z]{1}",
  aadharCardNumberRegex: "^\\d{12}$",
  pinCodeRegex: "^$|^[1-9][0-9]{5}$",
  IFSCRegex: "^[A-Za-z]{4}[a-zA-Z0-9]{7}$",
  taxRateRegex: "^([0-9][0-9]{0,1}|28)(,([0-9][0-9]{0,1}|28))*$",
  CESSRegex: "^([0-9][0-9]{0,2}|1000)(,([0-9][0-9]{0,2}|1000))*$",
  basicCustomDutyRegex: "^([0-9][0-9]{0,2}|1000)(,([0-9][0-9]{0,2}|1000))*$",
  tableMappingComponentFromatRegex: "^(0|[1-9][0-9]*)$",
  max_tax_rate: 28,
  disableGstrSave: false,
  disableGstr2Preview: true
  //   dscsigner: SbmConstant.EM_SIGNER
};
