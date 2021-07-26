const generalInfoValidation = ({ dataToValidate, errorObject }) => {
    let isErrorInGeneralInfo  = false;
    if (!dataToValidate.SUBHEADING) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductDesc =
        'Product Description is a required field';
    }
    if (!dataToValidate.Product_id) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductId =
            'Product ID is a required field';
    } 
    if (dataToValidate.Product_id && reservedNames.includes(dataToValidate.Product_id.toLowerCase())) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductId = `${dataToValidate.Product_id} is reserved please try using another keyword`;
    } 
    if (!(dataToValidate.HEADING && strValidation(/^[A-Za-z0-9 ]+$/, dataToValidate.HEADING))) {
        isErrorInGeneralInfo = true;
        errorObject.ProductInformation.ProductName =
        'Product Name should alphabetical or numerical value.';
    }
}

const validateBeforeSaving = ({ dataToValidate, errorObject}) => {

    // Product's general info validation, name, desc etc...
    generalInfoValidation({ dataToValidate, errorObject })    

}