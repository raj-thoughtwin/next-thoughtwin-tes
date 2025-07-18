import { ServicePagesType } from "./generateMetaData";

export function isValidServicePageType(slug: string): slug is ServicePagesType {
    return [
        "python"
        , "php"
        , "flutter"
        , "reactNative"
        , "android"
        , "ios"
        , "blockChain"
        , "nodeJS"
        , "reactJS"
        , "meanStack"
        , "mernStack"
        , "angularJs"
        , "aboutUs"
        , "blogs"
        , "career"
        , "contactUs"
        , "ourTeam"
        , "portfolio"
        , "ror"
        , "home"
    ].includes(slug as ServicePagesType);
}