import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaDataMetaData extends Schema.Component {
  collectionName: 'components_meta_data_meta_data';
  info: {
    displayName: 'metaData';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta-data.meta-data': MetaDataMetaData;
    }
  }
}
