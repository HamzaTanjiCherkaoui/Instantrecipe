declare module 'models' {

    export namespace models {
        namespace tag {

            interface Attributes {
                id: any;
                name: string;
                receipeIds: any [] ;
            }

            interface RawAttributes {
                _id: any;
                name: string;
                receipeIds: any[];
            }

        }
    }
}
