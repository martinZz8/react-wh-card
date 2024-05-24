export interface IMainPageContent {
    app_version: {
        title: string;
    };
    section_available_sections: {
        about_company: string;
        additional_info: string;
        location: string;
        mail: string;
        photo_gallery: string;
    };    
    section_ua_help: {
        ua_help_info_long: string;
        ua_help_info_short: string;
    };
    section_main_page_header: {
        title: string;
        country: string;
        street: string;
        email: string;
        telephone: string;        
    };    
    section_about_company: {
        main: {
            desc1: string;
            desc2: string;
            desc3: string;
        };
        services: {
            title: string;
            desc1: string;
            desc2: string;
            desc3: string;
            desc4: string;
            desc5: string;
            desc6: string;
            desc7: string;
            desc8: string;
            desc9: string;
            desc10: string;
            desc11: string;
        };
        ending: {
            title: string;
            desc1: string;
            desc2: string;
        };
    };
    section_additional_info: {
        email: string;
        telephone: string;
        address: string;
        open_hours: string;
        day_of_week: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;            
        };
        closed: string;
    };
    section_mail: {
        first_name: string;
        last_name: string;
        phone_number: string;
        email: string;
        topic: string;
        message: string;
        select_files: string;
        consent_to_data_processing: {
            desc1: string;
            desc2: string;
            desc3: string;
            desc4_1: string;
            desc4_2: string;
            desc4_3: string;
        };
        send: string;
        sending_message: string;
        successfull_send_message: string;
        error_send_message: string;
        needed_phone_number_or_email_message: string;
    };
    section_photo_gallery: {
        gallery1: string;
        gallery2: string;
        gallery3: string;
        gallery4: string;
        gallery5: string;
        gallery6: string;
        gallery7: string;
        load_more_images: string;
    };
    section_back_to_top_button: {
        title: string;
    };
    section_footer: {        
        all_rights_reserved: string;
        made_by: string;        
    };    
}