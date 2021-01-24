export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    sign_in_count: number;
    number_of_enrollments: number;
    number_of_enrollments_accessed: number;
    created_at: Date;
    last_sign_in_at?: Date;
    account_expires?: any;
    sf_user_id?: any;
    sf_contact_id?: any;
    is_salesforce_contact: number;
    CustomData?: any;
    customDataFieldValues: any[];
    locale: string;
    enabled: boolean;
    user_type: string;
    can_enroll: boolean;
    can_delete_users: boolean;
    can_unenroll_users: boolean;
    can_move_groups: boolean;
    can_mark_complete: boolean;
    tutor_can_edit_their_courses: boolean;
    tutor_can_create_courses: boolean;
}
