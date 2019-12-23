export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const attachmentTypes = {
    DOC: 'application/msword',
    PNGIMAGE: 'image/png',
    JPEGIMAGE: 'image/jpeg',
    CSV: 'application/vnd.ms-excel',
    EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    PDF: 'application/pdf',
    ZIP: 'application/x-zip-compressed',
}

export function getDateFromDateNumber(dateNumber: number) {
    return new Date(dateNumber);
}

export function getFormattedDateMonthAndDay(dateNumber: number) {
    const date = getDateFromDateNumber(dateNumber);
    return months[date.getMonth()] + ' ' + date.getDate();
}

export function getIconClassFromFileType(fileType: string) {
    if (fileType === attachmentTypes.PNGIMAGE || fileType === attachmentTypes.JPEGIMAGE) {
        return 'icon-image';
    } else if (fileType === attachmentTypes.CSV || fileType === attachmentTypes.EXCEL) {
        return 'icon-csv';
    } else if (fileType === attachmentTypes.PDF) {
        return 'icon-pdf';
    } else if (fileType === attachmentTypes.ZIP) {
        return 'icon-zip';
    } else if (fileType === attachmentTypes.DOC) {
        return 'icon-doc';
    } else {
        return 'icon-attachment';
    }
}

export function getFullDateString(dateNumber: number) {
    const date = getDateFromDateNumber(dateNumber);
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

export function isPastDate(targetDate: number) {
    const todaysDate = (new Date()).getTime();
    return (targetDate - todaysDate) < 0;
}

export function getCurrentFullDateString(dateNumber: number) {
    let dateString = getFullDateString(dateNumber);

    if (isPastDate(dateNumber)) {
        dateString += ' (Past Due)'
    }

    return dateString;
}

export function getAddressDetails(addressJson: any) {
    let finalAddress = { "street1": "", "street2": "", "county": "", "city": "", "state": "", "country": "", "zip": "" };
    const addressMap = {
        'administrative_area_level_4': 'street1',
        'sublocality_level_2': 'street1',
        'route': 'street1',
        'street_code': 'street1',
        'sublocality_level_1': 'street2',
        'administrative_area_level_3': 'street2',
        'administrative_area_level_2': 'county',
        'locality': 'city',
        'administrative_area_level_1': 'state',
        'country': 'country',
        'postal_code': 'zip'
    }
    if (!addressJson || !addressJson.address_components) {
        return finalAddress;
    }
    var addressComponents = addressJson.address_components;
    addressComponents.forEach(address => {
        if (address && address.types) {
            address.types.forEach(type => {
                if (addressMap[type]) {
                    finalAddress[addressMap[type]] = address.long_name;
                }
            })
        }
    });
    return finalAddress;
}
