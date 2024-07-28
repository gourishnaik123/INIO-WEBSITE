
export function getBaseUrl() {

    //staging URLs
    if (location.href.indexOf("localhost") > -1 ||
        location.href.indexOf("65.21.6.1") > -1 ||
        location.href.indexOf("staging") > -1) {
        return "https://inio-staging-api.tiniva.com/";
        // return "http://65.108.48.125:8080/";
    } else if (location.href.indexOf("staging") > -1 ||
        location.href.indexOf("65.21.6.1") > -1) {
        return "https://inio-staging-api.tiniva.com/";
    }
    else { // PRODUCTION
        return "https://inio-staging-api.tiniva.com/";
    }
}

export function getExtranetBaseUrl() {
    //Localhost
    if (location.href.indexOf("localhost") > -1 ||
        location.href.indexOf("65.21.6.1") > -1 ||
        location.href.indexOf("staging") > -1) {
        return "https://inio-staging-api.tiniva.com/";
    }
    // PRODUCTION
    else {
        return "https://inio-staging-api.tiniva.com/";
    }
}

export const URLConstants = {
    TRIPLAZE: {
        BASE_URL: getBaseUrl(),
        WALLET: {
            UPDATE_WALLET: getBaseUrl() + "wallet/updateWalletAmount"
        },
        BOOKINGS: {
            ACTIVITY: getBaseUrl() + 'activity/activitySearchByTransaction/',
            AIRPORT_TRANSFER: getBaseUrl() + 'airporttransfer/getAllbookingByTransactionId/',
            CITY_TRANSFER: getBaseUrl() + 'citytransfer/getAllbookingByTransactionId/',
            ATTRACTION: getBaseUrl() + 'attraction/getAllbookingByTransactionId/',
            RESTAURANT: getBaseUrl() + 'restaurant/getAllbookingByTransactionId/',
            HOTEL: getBaseUrl() + "nonCors/v2/booking/fetchAll?transactionId=",
            ADDONS: getBaseUrl() + "addOns/getAllbookingByTransactionId/"
        },
        ENTITY: {
            GET_COMPANY_DETAILS: getBaseUrl() + "users/getcompanydetails/",
            USERS_CREATE_ENTITY: getBaseUrl() + "users/createentity",
            USERS_SAVE_ROLES: getBaseUrl() + "users/saveRoles",
            USERS_UPDATE_ROLES: getBaseUrl() + "users/updateUserRole",
            GET_ALL_COUNTRIES: getBaseUrl() + "geographic/getAllCountries",
            GET_TIMEZONE_BY_SEARCH: getBaseUrl() + "geographic/getTimezoneDetails/",
            GET_ALL_CURRENCIES: getBaseUrl() + "users/getcurrencies",
            GET_ALL_MODULES: getBaseUrl() + "users/getAllModules",
            GET_USER_MODULE: getBaseUrl() + "users/getuserrole/",
            GET_ACTIVE_COMPANY: getBaseUrl() + "users/allactivecompany",
            GET_INACTIVE_COMPANY: getBaseUrl() + "users/allinactivecompany",
            GET_ACTIVE_TO_BE_COMPANY: getBaseUrl() + "users/gettoactivatecomapany",
            ACTIVATE_THE_COMPANY: getBaseUrl() + "users/activiateCompany",
            DEACTIVATE_THE_COMPANY: getBaseUrl() + "users/deactiviateCompany",
        },
        STORE: {
            GET_CONTRACTOR_DETAILS: "store/getcontractdetails/",//{contractername}
            GET_ALL_STORES_FOR_USER: "store/getstorename",
            SAVE_NEW_CONTRACTOR: "store/savecontractdetails",
            GET_ALL_CONTRACTORS: "store/getAllContractDetails",
            UPDATE_CONTRACTOR: "store/updatecontractdetails",
            GET_TIMEZONE_BY_SEARCH: "geographic/getTimezoneDetails/",
            GET_ALL_VENDORS: "users/getvendordetails",
        },
        ADMIN: {
            UPLOAD_IMAGES: "admin/uploadImage/",//{fromModule}
            GET_ENTITY_LIST: "admin/getAllEntityDetails",
        },
        MARKUP: {
            GET_ALL_OTA: getBaseUrl() + "v1/buyerDetails/",//{key}/{token}
            FETCH_MARKUP: getBaseUrl() + "v1/agentMarkup/",//{agentReference}
            CREATE_UPDATE: getBaseUrl() + "v1/agentMarkup"

        },
        USER: {
            LOGIN: getBaseUrl() + "users/login",
            FETCH_USER_DETAILS: getBaseUrl() + "users/getBasicUserDetails/",
            RESET_PASSWORD: getBaseUrl() + "users/sendForgotPasswordLink/",
            GET_ALL_USER_BY_ENTITY: "users/getAllUserRoleDetails/",//{entityId}
            UPDATE_USER_ROLE: "users/updateUserRole/", //{entityId}
            GET_ALL_SUPPLIER: "users/getSuppierBuyerDetails/SUPPLIER",
            GET_ALL_BUYER: "users/getSuppierBuyerDetails/BUYER",
            GET_ALL_STAFF: getBaseUrl() + "users/getinhouseusers",
            GET_ALL_CURRENCIES: getBaseUrl() + 'users/getcurrencies'
        },
        ACTIVITY: {
            PRECHECK_CANCELLATION_POLICY: "activity/precheckcancellationpolicy/",//{{bookingId}}
            FETCH_BOOKINGS_BY_MONTH: "activity/getActivityBookingDetails",
            FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "activity/getActivityBookingDetailsBasedonuser",
            GET_ALL_VEHICLES: "activity/getAllVehicleDetails",
            CONFIRM_BOOKING: "activity/confirmBooking?bookingid=",//"<BookingId>"
            FETCH_ATTRACTION: "attraction/getAttractionBookingDetails",
            FETCH_RESTAURANT: "restaurant/getRestaurantBookingDetails",
            ARCHIVE: "activity/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "activity/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "activity/confirmbooking",
            DOWNLOAD_BOOKING_REPORT: getBaseUrl() + "activity/download/",
            FETCH_ADDONS_BOOKINGS: "addOns/getAddOnBookingDetails"
        },
        HOTEL: {
            CONFIRM_BOOKING: getBaseUrl() + "nonCors/v2/booking/pushBookingStatus",
            HOTEL_LIST: "nonCors/v2/booking/fetchAll",
            REPORTS: "hotelReports/findBookingsByCriteria",
            ASSIGN_STAFF: getBaseUrl() + "nonCors/v2/booking/assign"
        },
        STATIC_PACKAGE: {
            PRECHECK_CANCELLATION_POLICY: "staticpackaging/precheckcancellationpolicy/",//{{bookingId}}
            // FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "activity/getActivityBookingDetailsBasedonuser",
            GET_SP_BOOKINGS: "staticpackaging/getStaticPackageBookingDetails",
            ARCHIVE: "staticpackaging/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "staticpackaging/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "staticpackaging/confirmbooking",
        },
        GEOGRAPHIC: {
            GET_TIMEZONE: "geographic/getTimmeZoneDetailsOnUtc/"//{{utc}}
        },
        AIRPORT_TRANSFER: {
            GET_ASSOCIATED_RECORDS: "airporttransfer/getAirportTransfer/",//{id}
            FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "airporttransfer/getAirportTransferBookingDetailsForUser",
            BOOKING_CALCULATE_PRICE: "airporttransfer/calculatePrice",
            PRECHECK_CANCELLATION_POLICY: "airporttransfer/precheckcancellationpolicy/",//{bookingId}
            CONFIRM_BOOKING: "airporttransfer/confirmBooking?bookingid=",//"<BookingId>"
            ARCHIVE: "airporttransfer/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "airporttransfer/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "airporttransfer/confirmbooking",
            DOWNLOAD_BOOKING_REPORT: getBaseUrl() + "airporttransfer/download/"
        },
        CITY_TRANSFER: {
            GET_ASSOCIATED_RECORDS: "citytransfer/getCityTransfer/",//{id}
            FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "citytransfer/getCityTransferBookingDetailsForUser",
            BOOKING_CALCULATE_PRICE: "citytransfer/calculatePrice",
            PRECHECK_CANCELLATION_POLICY: "citytransfer/precheckcancellationpolicy/",//{bookingId}
            CONFIRM_BOOKING: "citytransfer/confirmBooking?bookingid=",//"<BookingId>"
            ARCHIVE: "citytransfer/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "citytransfer/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "citytransfer/confirmbooking",
            DOWNLOAD_BOOKING_REPORT: getBaseUrl() + "citytransfer/download/"
        },
        RESTAURANT: {
            GET_BY_ID: "restaurant/getrestaurantdetailsbyId/",
            // FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "activity/getActivityBookingDetailsBasedonuser",
            UPDATE_RESTAURANT: "restaurant/updaterestaurentDetails",
            ARCHIVE: "restaurant/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "restaurant/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "restaurant/confirmbooking",
            DOWNLOAD_BOOKING_REPORT: getBaseUrl() + "restaurant/download/"
        },
        ATTRACTION: {
            UPDATE_ATTRACTION: "attraction/updateAttractionDetails",
            // FETCH_BOOKINGS_BY_MONTH_BASED_ON_USER: "activity/getActivityBookingDetailsBasedonuser",
            ARCHIVE: "attraction/toggle/",//{id}
            ASSIGN_BOOKING: getBaseUrl() + "attraction/assignBooking/",//{bookingId}/{userId}
            RECONFIRM_BOOKING: "attraction/confirmbooking",
            DOWNLOAD_BOOKING_REPORT: getBaseUrl() + "attraction/download/"
        },
        WELLNESS: {
            GET_ALL_SPECIFICATION: "relax/getSpecifications",
            GET_ALL_THERAPISTS: "relax/getTherapist",
            GET_ALL_SPA: "relax/getWellnessdetails",
            SAVE_SPECIFICATION: "relax/saveSpecification",
            SAVE_THERAPY: "relax/savetherapist",
            SAVE_SPA: "relax/savewelness",
            GET_ALL_BOOKING: "relax/getBooking",
            ASSIGN_THERAPIST_TO_BOOKING: "relax/assigntherapy"
        },
        GET_ALL_ADDONS: 'addOns/getAllAddOnDetails?archived=false',
        SAVE_ADD_ONS: 'addOns/saveAddOns',
        UPDATE_ADDONS: 'addOns/updateAddOnDetails/',
        ARCHIVE: 'addOns/updateArchiveStatusForAddOn',
        ASSIGN_BOOKING_ADDONS: getBaseUrl() + "addOns/assignBooking/",//{bookingId}/{userId}/{username},
        RECONFIRM_BOOKING_ADDONS: "addOns/confirmbooking"
    },
    GENERAL: {
        BASE_URL: getBaseUrl()
    },
    EXTRANET: {
        LOGIN: getExtranetBaseUrl() + "api/login",
        DASHBOARD: {
            VIEW_ALL_PROPERTIES: getExtranetBaseUrl() + "api/ext-property/dashboardProperty",
            VIEW_ACTIVE_PROPERTIES: getExtranetBaseUrl() + "api/ext-property/dashboardProperty",
            VIEW_INACTIVE_PROPERTIES: getExtranetBaseUrl() + "api/ext-property/dashboardProperty",
            VIEW_DELETE_PROPERTIES: getExtranetBaseUrl() + "api/ext-property/dashboardProperty",
            CHANGE_PROPERTY_STATUS: getExtranetBaseUrl() + "api/ext-property/changeProductStatus",
            DELETE_PROPERTY: getExtranetBaseUrl() + "api/ext-property/changeProductStatus",
            GET_USER_PREFRENCE: getExtranetBaseUrl() + "api/ext-property/userPreference",
            SAVE_USER_PREFRENCE: getExtranetBaseUrl() + "api/ext-property/saveUserPreference",
            GET_ALL_HOTELS: getExtranetBaseUrl() + "api/ext-prop/getAllHotelList",
            GET_ALL_PRODUCT_IDS: getExtranetBaseUrl() + 'api/ext-prop/getAllHotelListByProductId',
            GET_ALL_AGENTS:getBaseUrl()+'users/getagentdetailspagination?'
        },
        INVENTORY: {
            VIEW_INVENTORY: getExtranetBaseUrl() + "api/inventoryPrices/viewInventory",
            UPDATE_INVENTORY: getExtranetBaseUrl() + "api/inventoryPrices/updateInventory",
            GET_ROOM_LIST: getExtranetBaseUrl() + "roomRatePlan/getRoomList"
        },
        PRICING: {
            GET_ROOM_TYPE: getExtranetBaseUrl() + "roomRatePlan/getRoomList",
            GET_RATEPLAN_TYPE: getExtranetBaseUrl() + "roomRatePlan/getRatePlanList",
            VIEW_PRICING: getExtranetBaseUrl() + "api/inventoryPrices/viewPrice",
            UPDATE_PRICING: getExtranetBaseUrl() + "api/inventoryPrices/updatePrice",
            CALCULATE_PRICE: getExtranetBaseUrl() + "api/inventoryPrices/calculatePrice",
            GET_SURCHARGE: getExtranetBaseUrl() + "api/ext-property/getSurcharges",
            CREATE_SURCHARGE: getExtranetBaseUrl() + "api/ext-property/createSurcharges",
            UPDATE_SURCHARGE: getExtranetBaseUrl() + "api/ext-property/updateSurcharges",
            DELETE_SURCHARGE: getExtranetBaseUrl() + "api/ext-property/surcharge/"
        },
        PROPERTY: {
            VIEW_PROPERTY: getExtranetBaseUrl() + "api/ext-property/dashboardProperty?supplierId=1134&status=ALL",
            GET_ROOM_AMENITIES: getExtranetBaseUrl() + "api/ext-property/getRoomAmenities",
            RATEPLAN_GEO_LOCATION: getExtranetBaseUrl() + "api/ext-lookup/getGeoLocations",
            ROOM_TYPES: getExtranetBaseUrl() + "api/ext-lookup/getRoomType",


            BASIC_INFO: {
                UPDATE_BASIC_INFO: getExtranetBaseUrl() + "api/ext-property/updateBasicHotel",
                VIEW_BASIC_INFO: getExtranetBaseUrl() + "api/ext-property/getBasicHotel",
                GET_ALL_LOCALITIES: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations?countryId=1&stateId=1&cityId=4"
            },
            CONTACT: {
                EDIT_DETAILED_CONTACT_BY_ID: getExtranetBaseUrl() + "api/ext-property/getDetailedContact",
                UPDATE_CONTACT_INFO: getExtranetBaseUrl() + "api/ext-property/updateHotelContact",
                CONTACT_SAVE: getExtranetBaseUrl() + "api/ext-property/createDetailedContact",
                ADD_NEW_CONTACT: getExtranetBaseUrl() + "api/ext-property/updateDetailedContact",
                VIEW_CONTACT_INFO: getExtranetBaseUrl() + "api/ext-property/getHotelContact",
                GET_DETAILED_CONTACT: getExtranetBaseUrl() + "api/ext-property/getDetailedContact",
                GET_CONTACT_CATEGORY: getExtranetBaseUrl() + "api/ext-lookup/getContactCategory",
                GET_PHONE_NUM_COUNTRYCODE: getExtranetBaseUrl() + "api/ext-lookup/getCountryCodeList",
                ACCOUNT_AND_VENDOR_CONTACT_SAVE: getExtranetBaseUrl() + "api/ext-property/updateAccountManagerAndVendorContactDetails/",//hotelId
                GET_ACCOUNT_AND_VENDOR_DETAILS: getExtranetBaseUrl() + "api/ext-property/getAccountManagerAndVendorContactDetails?hotelId="

            },
            POLICY: {
                DISPLAY_POLICY: getExtranetBaseUrl() + "api/ext-property/getHotelPolicy",
                SAVE_POLICY: getExtranetBaseUrl() + "api/ext-property/updateHotelPolicy",
                ADD_NEW_HOTEL_PLOICY: getExtranetBaseUrl() + "api/ext-property/updateHotelPolicyV2/", //product id
                GET_POLICY: getExtranetBaseUrl() + "api/ext-property/getHotelPolicyV2/",
                CREATE_POLICY: getExtranetBaseUrl() + "api/ext-property/createNewCancellationPolicy",
                DELETE_POLICY: getExtranetBaseUrl() + "api/ext-property/changeCancellationPolicyStatus?policyId="
            },
            BANK_DETAILS: {
                EDIT_BANK_DETAIL: getExtranetBaseUrl() + "api/ext-property/getHotelBankDetails",
                UPLOAD_IMAGE: getExtranetBaseUrl() + "api/ext-image/uploadFile",
                GET_BANK_DETAIL: getExtranetBaseUrl() + "api/ext-property/getHotelBankDetails",
                UPDATE_BANK_DETAIL: getExtranetBaseUrl() + "api/ext-property/updateHotelBankDetails",
                CREATE_NEW_BANK_DETAIL: getExtranetBaseUrl() + "api/ext-property/createHotelBankDetails",
                CHANGE_BANK_DETAIL_STATUS: getExtranetBaseUrl() + "api/ext-property/changeBankDetailsStatus?hotelId=2164&bankdetailsId=1",

            },
            ROOMS: {
                VIEW_ROOM: getExtranetBaseUrl() + "roomRatePlan/viewRoom",
                CHANGE_ROOM_STATUS: getExtranetBaseUrl() + "roomRatePlan/changeRoomStatus?roomId=",
                ADD_NEW_ROOM: getExtranetBaseUrl() + "roomRatePlan/addRoom",
                EDIT_ROOM: getExtranetBaseUrl() + "roomRatePlan/editRoom",
                GET_ROOM_AMENITIES_BY_ID: getExtranetBaseUrl() + "api/ext-property/getRoomAmenities",
            },
            REVIEW: {
                GET_REVIEW: "https://review.triplaze.com/v1/hotelReview/ratingsByPropertyId/",
                PUBLISH_REVIEW: "https://review.triplaze.com/v1/hotelReview/publish/"//{uuid}
            },
            RATE_PLANS: {
                VIEW_RATE_PLAN: getExtranetBaseUrl() + "roomRatePlan/viewRatePlan",
                CHANGE_RATE_PLAN_STATUS: getExtranetBaseUrl() + "roomRatePlan/updateRatePlanStatus?ratePlanId=",
                EDIT_RATE_PLAN: getExtranetBaseUrl() + "roomRatePlan/editRatePlan",
                ADD_NEW_RATEPLAN: getExtranetBaseUrl() + "roomRatePlan/addRatePlan",
                CHECK_CANCEL_RULE_EXISTS: getExtranetBaseUrl() + "roomRatePlan/checkCancelRuleExists"
            },
            CHILD_POLICY: {
                DISPLAY_CHILD_POLICY: getExtranetBaseUrl() + "api/ext-property/getHotelChildAge",
                SAVE_CHILD: getExtranetBaseUrl() + "api/ext-property/setHotelChildAge",
                DELETE_CHILD: getExtranetBaseUrl() + "api/ext-property/deleteHotelChildAge"
            },
            PHOTOS: {
                GET_PHOTO_CAPTION: getExtranetBaseUrl() + "api/ext-property/getPhotoCaption",
                GET_HOTEL_IMAGES: getExtranetBaseUrl() + "api/ext-property/getHotelImages",
                CREATE_HOTEL_IMAGES: getExtranetBaseUrl() + "api/ext-property/createHotelImages",
                UPDATE_PHOTOS: getExtranetBaseUrl() + "api/ext-property/updateHotelImages",
                UPLOAD_IMAGE: getExtranetBaseUrl() + "api/ext-image/uploadFile",
                GET_ROOM_LIST: getExtranetBaseUrl() + "roomRatePlan/getRoomList",
                DELETE_PHOTOS: getExtranetBaseUrl() + "api/ext-image/deleteFile",
                SORT_IMAGE: getExtranetBaseUrl() + "api/ext-property/sortingHotelImages",
                //new Api for Photos 

                CREATE_IMAGES_V2: getExtranetBaseUrl() + "api/ext-property/createHotelImagesV2/",//hotelid
                UPDATE_IMAGES_V2: getExtranetBaseUrl() + "api/ext-property/updateHotelImagesV2",
                SORTING_HOTEL_IMAGES: getExtranetBaseUrl() + "api/ext-property/sortingHotelImagesV2",
                GET_HOTEL_IMAGES_V2: getExtranetBaseUrl() + "api/ext-property/getHotelImagesV2?productId="//productid and hotelid
            },
            MAPS: {
                DISPLAY_MAP: getExtranetBaseUrl() + "api/ext-property/getMapLocation",
                SAVE_GEO_COORDINATES: getExtranetBaseUrl() + "api/ext-property/updateMapLocation"
            },
            CANCEL_RULES: {
                VIEW_CANCEL_RULES: getExtranetBaseUrl() + "api/ext-property/viewCancellationRule",
                CREATE_CANCEL_RULE: getExtranetBaseUrl() + "api/ext-property/createCancelRule",
                EDIT_CANCEL_RULES: getExtranetBaseUrl() + "api/ext-property/editCancelRule",
                VIEW_CANCELATION_POLICY: getExtranetBaseUrl() + "api/ext-property/viewCancellationPolicy",
                CHANGE_STATUS_OF_POLICY: getExtranetBaseUrl() + "api/ext-property/changeCancellationPolicyStatus",
                DELETE_CANCEL_RULES: getExtranetBaseUrl() + "api/ext-property/deleteCancelRule?id=",
                CREATE_NEW_CANCELLATION_POLICY: getExtranetBaseUrl() + "api/ext-property/createCancellationpolicy"
            },
            TAXES: {
                GET_TAXES: getExtranetBaseUrl() + "api/ext-property/getHotelTaxes",
                SAVE_TAXES: getExtranetBaseUrl() + "api/ext-property/setHotelTaxes",
                UPDATE_TAXES: getExtranetBaseUrl() + "api/ext-property/updateHotelTaxes",
                EDIT_TAX_BY_ID: getExtranetBaseUrl() + "api/ext-property/getHotelTaxes",
                DELETE_TAX: getExtranetBaseUrl() + "api/ext-property/deleteHotelTaxes"
            },
            AMENITIES: {
                ADD_AMENITIES: getExtranetBaseUrl() + "api/ext-property/updateHotelAmenities"
            },
            FILTERS: {
                GET_FILTER: getExtranetBaseUrl() + "api/ext-property/getFilterLookup",
                UPDATE_FILTER: getExtranetBaseUrl() + "api/ext-property/updateFilters"
            }

        },

        GET_ALL: {
            ALL_CHAINS: getExtranetBaseUrl() + "api/ext-lookup/getChainNames",
            HOTEL_TYPES: getExtranetBaseUrl() + "api/ext-lookup/getHotelType",
            PROPERTY_THEMES: getExtranetBaseUrl() + "api/ext-lookup/getPropertyTheme",
            CURRENCIES: getExtranetBaseUrl() + "api/ext-lookup/getCurrency",
            COUNTRIES: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations",
            STATE_OF_COUNTRIES: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations",
            CITIES_IN_STATE: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations",
            GET_ALL_LOCALITIES: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations",
            ALL_DESIGNATION: getExtranetBaseUrl() + "api/ext-lookup/getContactDesignation",
            AMENITIES: getExtranetBaseUrl() + "api/ext-lookup/getHotelAmenities",
            GET_HOTEL_AMENITIES_BY_ID: getExtranetBaseUrl() + "api/ext-lookup/getHotelAmenities",
            FILTERS: getExtranetBaseUrl() + "api/ext-lookup/getFilterMasterLookUp",
            BED_TYPES: getExtranetBaseUrl() + "api/ext-lookup/getBedTypes",
            GET_ROOM_TYPE: getExtranetBaseUrl() + "api/ext-lookup/getRoomTypes",
            GET_ROOM_AMENITIES: getExtranetBaseUrl() + "api/ext-property/getRoomAmenities",
            GET_HOTE_INFO: getExtranetBaseUrl() + "api/ext-property/getBasicHotel"  //dynamic Updated

        },
        OFFERS: {
            GET_ACTIVE_OFFERS: getExtranetBaseUrl() + "api/offers/fetchDealsV1",
            GET_INACTIVE_OFFERS: getExtranetBaseUrl() + "api/offers/fetchDealsV1",
            GET_ALL_OFFERS: getExtranetBaseUrl() + "api/offers/fetchDealsV1",
            ADD_OFFERS: getExtranetBaseUrl() + "api/offers/addEditDealsV1",
            EDIT_OFFERS_BY_ID: getExtranetBaseUrl() + "api/offers/fetchDealsV1",
            GET_STATES: getExtranetBaseUrl() + "api/ext-lookup/getAllLocations",
            GET_ROOM: getExtranetBaseUrl() + "roomRatePlan/getRoomList",
            GET_RATEPLAN_LIST: getExtranetBaseUrl() + "roomRatePlan/getRatePlanList",
            GET_OFFERS_TYPES: getExtranetBaseUrl() + "api/ext-lookup/getOfferTypes",
            CHANGE_STATUS: getExtranetBaseUrl() + "api/offers/changeDealStatusV1"
        },
        ADDONS: {
            // VIEW_ADDONS:"api/ext-promotionoffers/viewAddOns",
            VIEW_ADDONS: getExtranetBaseUrl() + "api/addOns/viewAddOns",
            ADD_ADDONS: getExtranetBaseUrl() + "api/addOns/addAddOns",
            EDIT_ADDONS: getExtranetBaseUrl() + "api/addOns/editAddOns",
            DELETE_ADDONS: getExtranetBaseUrl() + "api/addOns/deleteAddOn",
        },
        PROMOTIONS: {
            GET_PROMOTIONS: getExtranetBaseUrl() + "api/promo/getPromoCode",
            GET_PROMO_BY_ID: getExtranetBaseUrl() + "api/promo/getPromoCode",
            CREATE_PROMO: getExtranetBaseUrl() + "api/promo/createPromoCode",
            UPDATE_PROMO: getExtranetBaseUrl() + "api/promo/updatePromoCode",
            CHANGE_STATUS: getExtranetBaseUrl() + "api/promo/changePromoCodeStatus"
        },
        REPORTS: {
            GET_ALL_RESERVATION_REPORT: getExtranetBaseUrl() + "api/reports/reservationReport",
            GET_ALL_BOOKING_REPORT: getExtranetBaseUrl() + "api/reports/getHotelBookings",
            CANCEL_BOOKING: getExtranetBaseUrl() + "api/ext/cancel"

        },
        AUDIT_LOGS: {
            LOG_PROPERTY: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_ROOM: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_RATEPLAN: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_INVENTORY: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_PRICE: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_DEALS: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_PROMOTION: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog",
            LOG_CHANNEL_MANAGER_LINKAGE: getExtranetBaseUrl() + "api/auditLogs/getBEUserLog"
        },
        STORIES: {
            CREATE_STORIES: getExtranetBaseUrl() + "api/ext-property/createOrUpdateStory/",
            GET_ALL_STORIES: getExtranetBaseUrl() + "api/ext-property/getAllStoriesForHotel?hotelId=",//hotelId
            GET_STORIES_BY_ID: getExtranetBaseUrl() + "api/ext-property/fetchStoryById?storyId=", //stories id and hotelId
        },
        VERIFY_ITEMS: {
            CREATE_OR_UPDATE_ITEMS: getExtranetBaseUrl() + "api/ext-property/addOrUpdateVerifyItems",
            GET_HOTEL_VERIFY_ITEMS: getExtranetBaseUrl() + "api/ext-property/getHotelVerifyItems/",// hotelId
        },
        MODERATED_TAB: {
            SAVE_BASIC_INFO_OVERVIEW: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/overview",
            GET_BASIC_INFO_OVERVIEW: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getOverview/",//hotelId

            SAVE_BASIC_INFO_PROPERTY_USP: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/propertyUsp",
            GET_BASIC_INFO_PROPERTY_USP: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getPropertyUsp/",//hotelId

            SAVE_BASIC_INFO_CRED_EXCLUSIVE: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/credExclusive",
            GET_CRED_EXCLUSIVE: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getCredExclusive/",//hotelID

            SAVE_BASIC_INFO_DINING: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/dining",
            GET_DINING: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getDining/",//hotelId

            SAVE_BASIC_INFO_EXPERIANCE: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/experience",
            GET_EXPERIANCE: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getExperience/",//hotelId

            SAVE_ROOM_MODERATION: getExtranetBaseUrl() + "roomRatePlan/moderations/updateRoomModeration",
            GET_ROOM_MODERATION: getExtranetBaseUrl() + "roomRatePlan/moderations/getRoomModeration/", //productId

            SAVE_POLICY_MODERATED: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/policy",
            GET_HOTEL_POLICY_MODERATED: getExtranetBaseUrl() + "api/ext-property/moderations/basicInfo/getHotelPolicy/",//hotelId
        },
        TAX_CONFIGURATION: {
            GET_TAX_TYPE: getExtranetBaseUrl() + "api/ext-property/getTaxTypes",
            FETCH_MERCHANT_TAX_TYPE: getExtranetBaseUrl() + "api/ext-property/fetchMerchantTaxType/",//country id
            GET_HOTEL_TAXES: getExtranetBaseUrl() + "api/ext-property/getHotelTaxesV1?productId=",//productId
            SAVE_TAX_CONFIGURATION: getExtranetBaseUrl() + "api/ext-property/setHotelTaxes",
            ATTACH_TAX_CONFIG_TO_PROPERTY: getExtranetBaseUrl() + "api/ext-property/attachTaxComponentToProperty",
            ADD_NEW_TAX_TYPE: getExtranetBaseUrl() + "api/ext-property/addNewTaxType",
            GET_ALL_TAXES_WITHOUT_PROPERTY_ID: getExtranetBaseUrl() + "api/ext-property/getAllTaxes?active=",
            GET_ALL_TAXES_BASED_ON_MERCHANT_ID: getExtranetBaseUrl() + "api/ext-property/getTaxesForMerchantTaxType?merchantTaxTypeId=",//merchant tax type id
            DELETE_TAXES: getExtranetBaseUrl() + "api/ext-property/deleteHotelTaxesByTaxNameAndDateRange?taxName=",//tax name , start date and end date 
            ARCHIVE_TAX: getExtranetBaseUrl() + "api/ext-property/togglePropertyTaxComponentStatus",
            GET_KYC_MERCHANT_DETAILS: getExtranetBaseUrl() + "api/ext-property/getMerchantKycMasterDetails?merchantId=",//merchant id and product id 
            UPDATE_KYC_DETAILS: getExtranetBaseUrl() + "api/ext-property/updateMerchantKycMaster"
        },
        CHANNEL_MANGER: {
            ADD_CM_TO_PROPERTY: getExtranetBaseUrl() + "api/ext-property/addChannelManagerToProperty",
            GET_CM_FOR_PROPERTY: getExtranetBaseUrl() + "api/ext-property/getPropertyChannelManager/",//propertyId
            ARCHIVE_CM: getExtranetBaseUrl() + "api/ext-property/updateChannelManagerStatusForProperty?propertyId=",//propertyId , cmId, status
            GET_ALL_CHANNEL_MANAGERS: getExtranetBaseUrl() + "api/ext-property/getAllChannelManagers",
            GET_STAAH_PRODUCT_BY_EXTRANET_ID: getExtranetBaseUrl() + "api/ext-property/getStaahProductMappingByExtranetId/",//ext product id
            CREATE_OR_UPDATE_STAAH_MAPPING: getExtranetBaseUrl() + "api/ext-property/createOrUpdateStaahProductMapping",
            FETCH_STAAH_MAPPING: `${getExtranetBaseUrl()}api/ext-property/fetchStaahMapping/`,
            SYNC_STAAH_MAPPING: `${getExtranetBaseUrl()}api/ext-property/syncStaahMapping/`
        },
        BOOKINGS: {
            FETCH_ALL_BOOKINGS: getExtranetBaseUrl() + "api/ext/fetchAllBookings",
            FETCH_ALL_QUOTATION: getExtranetBaseUrl() + "api/ext/fetchQuotationDetailsByDate/",
            FETCH_QUOTATION_BYID: getExtranetBaseUrl() + "api/ext/fetchQuotationDetailsById/",
            CONFIRM_BOOKING: getExtranetBaseUrl() + "api/ext/confirmBookingFromQuotation/",
            RECONFIRM_BOOKING: getExtranetBaseUrl() + "api/ext/reconfirmBooking",
            CANCEL_BOOKING: getExtranetBaseUrl() + "api/ext/cancelBooking",
            CANCELLATION: getExtranetBaseUrl() + "api/ext/cancellationPreCheckService?bookingId=",
        },
        VENDOR: {
            CREATE_VENDOR: getExtranetBaseUrl() + "api/ext-prop/createVendor",
            UPDATE_VENDOR: getExtranetBaseUrl() + "api/ext-prop/updateVendor/",//vendorId
            GET_ALL_VENDORS: getExtranetBaseUrl() + "api/ext-prop/getAllVendors",
            GET_AGENT:getBaseUrl()+ "users/getagentdetailspagination?pageNo=0&pageSize=10"//users/getagentdetailspagination?pageNo=1&pageSize=1
        },
        CONTENT_MANAGEMENT: {
            GET_ALL_RATEPLAN_INCUSIONS: getExtranetBaseUrl() + 'roomRatePlan/getAllRatePlanInclusions',
            ADD_UPDATE_RATEPLAN_INCUSIONS: getExtranetBaseUrl() + 'roomRatePlan/addNewRatePlanInclusions',
            GET_ALL_RATEPLAN_INCLUSION_TAGS: getExtranetBaseUrl() + 'roomRatePlan/getAllInclusionsTag',
            ADD_UPDATE_RATEPLAN_INCUSION_TAGS: getExtranetBaseUrl() + 'roomRatePlan/createUpdateInclusionsTag',

            UPLOAD_HELP_DOCUMANET: getExtranetBaseUrl() + 'api/content/saveHelpDocuments',
            FETCH_ALL_HELP_DOCUMENT: getExtranetBaseUrl() + 'api/content/fetchAllDocuments',
            REMOVE_HELP_DOCUMENT: getExtranetBaseUrl() + 'api/content/deleteHelpDoc/', //{docId}
            UPDATE_HELP_DOC_NAME: getExtranetBaseUrl() + 'api/content/updateHelpDocName/'
        }
    },

    WALLET:{
        CREATE_WALLET:getExtranetBaseUrl()+"api/agent-wallet/createWalletTransaction",
        FETCH_WALLET_TRANSACTION:getExtranetBaseUrl()+"api/agent-wallet/fetchAgentWalletTransactions",
        FETCH_WALLET_BALANCE:getExtranetBaseUrl()+"api/agent-wallet/fetchAgentWalletBalance"
    }

}