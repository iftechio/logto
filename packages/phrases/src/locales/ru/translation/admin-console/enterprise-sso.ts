const enterprise_sso = {
  page_title: 'Единый вход в предприятие',
  title: 'Единый вход в предприятие',
  subtitle:
    'Подключите поставщика идентификации предприятия и включите одностороннюю аутентификацию с инициацией службы.',
  create: 'Добавить предприятий коннектор',
  col_connector_name: 'Имя коннектора',
  col_type: 'Тип',
  col_email_domain: 'Домен электронной почты',
  col_status: 'Статус',
  col_status_in_use: 'Используется',
  col_status_invalid: 'Недопустимый',
  placeholder_title: 'Коннектор предприятия',
  placeholder_description:
    'Logto предоставил множество встроенных поставщиков идентификации предприятия для подключения, тем временем вы можете создать своего с использованием стандартных протоколов.',
  create_modal: {
    title: 'Добавить коннектор предприятия',
    text_divider: 'Или вы можете настроить свой коннектор по стандартному протоколу.',
    connector_name_field_title: 'Имя коннектора',
    connector_name_field_placeholder: 'Имя для поставщика идентификации предприятия',
    create_button_text: 'Создать коннектор',
  },
  guide: {
    /** UNTRANSLATED */
    subtitle: 'A step by step guide to connect the enterprise identity provider.',
    /** UNTRANSLATED */
    finish_button_text: 'Continue',
  },
  basic_info: {
    /** UNTRANSLATED */
    title: 'Configure your service in the IdP',
    /** UNTRANSLATED */
    description:
      'Create a new application integration by SAML 2.0 in your {{name}} identity provider. Then paste the following value to it.',
    saml: {
      /** UNTRANSLATED */
      acs_url_field_name: 'Assertion consumer service URL (Reply URL)',
      /** UNTRANSLATED */
      audience_uri_field_name: 'Audience URI (SP Entity ID)',
    },
    oidc: {
      /** UNTRANSLATED */
      redirect_uri_field_name: 'Redirect URI (Callback URL)',
    },
  },
  attribute_mapping: {
    /** UNTRANSLATED */
    title: 'Attribute mappings',
    /** UNTRANSLATED */
    description:
      '`id` and `email` are required to sync user profile from IdP. Enter the following claim name and value in your IdP.',
    /** UNTRANSLATED */
    col_sp_claims: 'Claim name of Logto',
    /** UNTRANSLATED */
    col_idp_claims: 'Claim name of identity provider',
    /** UNTRANSLATED */
    idp_claim_tooltip: 'The claim name of the identity provider',
  },
  metadata: {
    /** UNTRANSLATED */
    title: 'Configure the IdP metadata',
    /** UNTRANSLATED */
    description: 'Configure the metadata from the identity provider',
    /** UNTRANSLATED */
    dropdown_trigger_text: 'Use another configuration method',
    /** UNTRANSLATED */
    dropdown_title: 'select your configuration method',
    /** UNTRANSLATED */
    metadata_format_url: 'Enter the metadata URL',
    /** UNTRANSLATED */
    metadata_format_xml: 'Upload the metadata XML file',
    /** UNTRANSLATED */
    metadata_format_manual: 'Enter metadata details manually',
    saml: {
      /** UNTRANSLATED */
      metadata_url_field_name: 'Metadata URL',
      /** UNTRANSLATED */
      metadata_url_description:
        'Dynamically fetch data from the metadata URL and keep certificate up to date.',
      /** UNTRANSLATED */
      metadata_xml_field_name: 'IdP metadata XML file',
      /** UNTRANSLATED */
      metadata_xml_uploader_text: 'Upload metadata XML file',
      /** UNTRANSLATED */
      sign_in_endpoint_field_name: 'Sign on URL',
      /** UNTRANSLATED */
      idp_entity_id_field_name: 'IdP entity ID (Issuer)',
      /** UNTRANSLATED */
      certificate_field_name: 'Signing certificate',
      /** UNTRANSLATED */
      certificate_placeholder: 'Copy and paste the x509 certificate',
    },
    oidc: {
      /** UNTRANSLATED */
      client_id_field_name: 'Client ID',
      /** UNTRANSLATED */
      client_secret_field_name: 'Client secret',
      /** UNTRANSLATED */
      issuer_field_name: 'Issuer',
      /** UNTRANSLATED */
      scope_field_name: 'Scope',
    },
  },
};

export default Object.freeze(enterprise_sso);
