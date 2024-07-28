export function getHost(): string {
    let host = window.location.host;
    host = 'inio-staging-booking-portal.tiniva.com'
    // host = 'inio-booking-portal.tiniva.com'
    return host;
}

export function BASE_URL(): string {
    let host = getHost();
    if (host.toLowerCase().indexOf('demo') > -1 || 
    host.toLowerCase().indexOf('staging') > -1 || 
    host.toLowerCase().indexOf('beta') > -1 || 
    host.toLowerCase().indexOf('localhost') > -1) {
        return 'https://inio-extranet-staging.tiniva.com'
    } else {
        return 'https://inio-extranet.tiniva.com'
    }
}
export function EXT_BASE_URL(): string {
    let host = getHost();
    if (host.toLowerCase().indexOf('demo') > -1 || host.toLowerCase().indexOf('staging') > -1 || host.toLowerCase().indexOf('beta') > -1 || host.toLowerCase().indexOf('localhost') > -1) {
        return 'https://inio-staging-api.tiniva.com'
    } else {
        return 'https://inio-live-api.tiniva.com'
    }
}

export function URLConstants() {
    return {
        LOGIN: BASE_URL() + "/users/login",
        GOOGLE_LOGIN_URL: '/api/google-login',
        GET_BASIC_USER_DETAILS: BASE_URL() + "/users/getBasicUserDetails/",
        EXT_PROPERTY: {
            FETCH_ALL_PROPERTIES_UNDER_A_CHAIN: EXT_BASE_URL() + '/api/ext-property/fetchAllPropertiesUnderAChain/' + getHost(),
            FETCH_AVAILABLE_SERVICE_FOR_PROPERTY: EXT_BASE_URL() + '/api/ext-property/fetchAvailableServicesForProperty/',
            // SEARCH_HOTEL: EXT_BASE_URL() + '/api/ext/searchHotels?',
            ROOM_AVAILABILITY: EXT_BASE_URL() + '/api/ext/roomAvailability',
            BOOKING_DIRECT: EXT_BASE_URL() + '/api/ext/createBookingDirect',
            FETCH_ADD_ON_SERVICES_FOR_PROPERTY: EXT_BASE_URL() + '/api/ext-property/fetchAddonServicesForProperty/'
        },
        ONE_DAY_ROOM: {
            ONE_DAY_ROOM_DETAILS_BY_RATE_AND_PRODUCT_ID: EXT_BASE_URL() + '/onedayroom/getOneDayRoomDetailsByDateAndProductId?',
            SAVE_DAY_BOOKING: EXT_BASE_URL() + '/onedayroom/saveDayBooking',
            CALCULATE_TIME_SLOT: EXT_BASE_URL() + '/onedayroom/calculateTimeSlot',
            
        },
        PRE_BOOKING: {
            BOOK_TABLE: 'https://tiniva-staging.tiniva.com/bookings/bookTable/162',
            SESSION_DETAILS: 'https://tiniva-staging.tiniva.com/bookings/getsessiondetails/162'
        },
        BANQUET_CARD: {
            Banquet_hall: 'https://cmsadmin.tiniva.com/entry/getAll/tiniva-booking-engine.com/BANQUET_HALL'
        },
        CELEBRATION_CARD: {
            Celebration: 'https://cmsadmin.tiniva.com/entry/getAll/tiniva-booking-engine.com/CELEBRATION'
        },
        FETCH_ALLPROPERTIES: {
            ALL_PROPERTIES: EXT_BASE_URL() + '/api/ext/getAllRoomDetails/',
        },
        QUOTATIONS: {
            GET_ALL_QUOTATION_BY_DATE: EXT_BASE_URL() + "/api/fetchQuotationDetailsByDate/",//start and end data
            GET_ALL_QUOTATION: EXT_BASE_URL() + "/api/ext/createBookingQuotation",
            FETCH_QUOTATION_BY_QUOTATIONID: EXT_BASE_URL() + "/api/fetchQuotationDetailsById/",//quotation id
            CONFIRM_BOOKING_BY_QUOTATION: EXT_BASE_URL() + "/api/confirmBookingFromQuotation/",//{quotationId}
        },
        PROMOCODE:{
            APPLY_PROMO:EXT_BASE_URL() + "/api/ext/applyPromoCode"
        },
        WALLET:{
            GET_WALLET_BALANCE:EXT_BASE_URL()+"/api/agent-wallet/fetchAgentWalletBalance"
        },
        HOTEL_ROOM:{
            GET_HOTEL_AMMENITIES:EXT_BASE_URL()+"/api/ext-lookup/getHotelAmenities?hotelId=",
            GET_ROOM_AMMENITIES:EXT_BASE_URL()+"/api/ext-property/getRoomAmenities?roomId="

            // 
        },
        // SEARCH:"https://inio-live-api.tiniva.com/api/ext/searchHotels?city=" 
        SEARCH:"https://inio-staging-api.tiniva.com/api/ext/searchHotels?city="

    }
}
