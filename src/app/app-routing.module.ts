import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCaseConvertComponent } from '../app/component/file-convert/text-caseconvert.component'
import { AlternatingCaseConverterComponent } from './component/alternating-case-converter/alternating-case-converter.component';
import { EnglishToBinaryComponent } from './component/english-to-binary/english-to-binary.component';
import { FontGenaratorComponent } from './component/font-genarator/font-genarator.component';
import { FrTextConverterComponent } from './component/fr-text-converter/fr-text-converter.component';
import { LowercaseToUppercaseComponent } from './component/lowercase-to-uppercase/lowercase-to-uppercase.component';
import { PagenotfoundComponentComponent } from './component/pagenotfound-component/pagenotfound-component.component';
import { PlTextConverterComponent } from './component/pl-text-converter/pl-text-converter.component';
import { SentenceCaseConvertertComponent } from './component/sentence-case-convertert/sentence-case-convertert.component';
import { SnakeCaseConverterComponent } from './component/snake-case-converter/snake-case-converter.component';
import { StringJsonStringfyComponent } from './component/string-json-stringfy/string-json-stringfy.component';
import { StringToBinaryComponent } from './component/string-to-binary/string-to-binary.component';
import { TitleCaseConverterComponent } from './component/title-case-converter/title-case-converter.component';
import { TrTextConverterComponent } from './component/tr-text-converter/tr-text-converter.component';
import { UaTextConverterComponent } from './component/ua-text-converter/ua-text-converter.component';
import { UppercaseToLowercaseComponent } from './component/uppercase-to-lowercase/uppercase-to-lowercase.component';
import { WideTextConvertorComponent } from './component/wide-text-convertor/wide-text-convertor.component';

const routes: Routes = [
  {
    path: '',
    component: TextCaseConvertComponent,
    data: {
      title: 'Convert Case',
      description: 'Easily change the case of your text with our online convertcase tool. Choose from sentence case, title case, all caps, and more. Try it now and give your text a professional look in just a few clicks!',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "ConvertCase",
        "url:": "https://text-convertcase.net/",
        "image": "",
        "description": "Easily change the case of your text with our online convertcase tool. Choose from sentence case, title case, all caps, and more. Try it now and give your text a professional look in just a few clicks!.",
        "brand": {
          "@type": "Brand",
          "name": "Convert case"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },{
    path: 'pl',
    component: PlTextConverterComponent,
    data: {
      title: 'Konwertuj przypadek',
      description: 'Narzędzie Convertcase to internetowe narzędzie do przetwarzania tekstu i tekstu, które pomaga zezwolić na dowolny tekst, który chcesz zaznaczyć i przekształcić różne przypadki',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "ConvertCase",
        "url:": "https://text-convertcase.net/pl",
        "image": "",
        "description": "Narzędzie Convertcase to internetowe narzędzie do przetwarzania tekstu i tekstu, które pomaga zezwolić na dowolny tekst, który chcesz zaznaczyć i przekształcić różne przypadki.",
        "brand": {
          "@type": "Brand",
          "name": "Konwertuj przypadek"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  }, {
    path: 'tr',
    component: TrTextConverterComponent,
    data: {
      title: 'Vakayı Dönüştür',
      description: 'büyük/küçük harf dönüştürme aracı, çevrimiçi bir metin ve kelime işleme aracıdır ve istediğiniz herhangi bir metni seçmenize izin vermenize ve farklı durumları dönüştürmenize yardımcı olur.',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "ConvertCase",
        "url:": "https://text-convertcase.net/tr",
        "image": "",
        "description": "Інструмент convertcase — це онлайн-утиліта для обробки текстів і текстів, яка допомагає вам дозволити будь-який текст, який ви хочете виділити, і трансформувати різні регістри.",
        "brand": {
          "@type": "Brand",
          "name": "Перетворити регістр"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'ua',
    component: UaTextConverterComponent,
    data: {
      title: 'Перетворити регістр',
      description: 'Інструмент convertcase — це онлайн-утиліта для обробки тексту та тексту, вона допомагає вам дозволити будь-який текст, який ви хочете виділити, і трансформувати різні регістри',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Tsonverttsas",
        "url:": "https://text-convertcase.net/ua",
        "image": "",
        "description": "Інструмент convertcase — це онлайн-утиліта для обробки текстів і текстів, яка допомагає вам дозволити будь-який текст, який ви хочете виділити, і трансформувати різні регістри.",
        "brand": {
          "@type": "Brand",
          "name": "Перетворити регістр"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'fr',
    component: FrTextConverterComponent,
    data: {
      title: 'Convertir le cas',
      description: `L'outil convertcase est un utilitaire de traitement de texte et de texte en ligne qui vous aide à autoriser n'importe quel texte que vous souhaitez sélectionner et transformer différents cas`,
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Convertir le cas",
        "url:": "https://text-convertcase.net/fr",
        "image": "",
        "description": "L'outil convertcase est un utilitaire de traitement de texte et de texte en ligne qui vous aide à autoriser n'importe quel texte que vous souhaitez sélectionner et transformer différents cas.",
        "brand": {
          "@type": "Brand",
          "name": "Convertir le cas"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'snake-case-converter', component: SnakeCaseConverterComponent,
    data: {
      title: 'Snake Case Converter | Text Convert Case',
      description: 'Text convert case is a free online converter that converts snake case to camelcase with one text replace. It supports both upper and lowercase conversion.',
      keyword: 'snake case converter',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/snake-case-converter",
        "name": "sentence case converter",
        "image": "",
        "description": "sentence case converter is an online text and word processing tool it helps you to allow any text you would like to select sentence case converter and transform different cases.",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'alternating-case-converter', component: AlternatingCaseConverterComponent,
    data: {
      title: 'Alternating Case Converter | Text Convert Case',
      description: 'Text Converter Case is an online alternating case converter tool. It can convert text to UPPER, lower, sentence and paragraph case by pressing a button.',
      keyword: 'alternating case converter',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "alternating case converter",
        "url": "https://text-convertcase.net/alternating-case-converter",
        "image": "",
        "description": "Text Converter Case is an online alternating case converter tool. It can convert text to UPPER, lower, sentence and paragraph case by pressing a button.",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'uppercase-to-lowercase', component: UppercaseToLowercaseComponent,
    data: {
      title: 'Uppercase To Lowercase Converter | Text Convert Case',
      description: 'Text convert case is an easy-to-use and powerful converter with upper to lowercase, you can convert characters to upper or lower case with the click of a button.',
      keyword: 'uppercase to lowercase converter',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/uppercase-to-lowercase",
        "name": "uppercase to lowercase converter",
        "image": "",
        "description": "Text convert case is an easy-to-use and powerful converter with upper to lowercase, you can convert characters to upper or lower case with the click of a button.",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4800"
        }
      }
    }
  },
  {
    path: 'lowercase-to-uppercase', component: LowercaseToUppercaseComponent,
    data: {
      title: 'Lowercase To Uppercase Converter | Text Convert Case',
      description: 'Are you looking for lowercase to uppercase converter tool online Text Convert case is one of the best lowercase to uppercase converter tool online in USA. Try now!',
      keyword: 'lowercase to uppercase converter',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/lowercase-to-uppercaser",
        "name": "lowercase to uppercase converter",
        "image": "",
        "description": "Convert Case is one of the best lowercase to uppercase converter online tool available today",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'sentence-case-converter', component: SentenceCaseConvertertComponent,
    data: {
      title: 'Sentence Case Converter Online Tool USA | Text Convert Case',
      description: 'Text Convert Case is a free online sentence case converter that can easily convert text between different letter cases in seconds. Visit our website to try now!',
      keyword: 'sentence case converter',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/sentence-case-converter",
        "name": "sentence case converter",
        "image": "",
        "description": "Text Convert Case is a free online sentence case converter that can easily convert text between different letter cases in seconds. Visit our website to try now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4900"
        }
      }
    }
  },
  {
    path: 'title-case-converter', component: TitleCaseConverterComponent,
    data: {
      title: 'Title Case Converter Tool | Text Convert Case',
      description: 'Text Convert Case offers you the best title case converter tool. It will help you to find the correct title case style in articles, newspapers, blogs, and books.',
      keyword: 'Title Case Converter, convert title case, convert to title case, convert case net',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/title-case-converter",
        "name": "Title Case Converter",
        "image": "",
        "description": "Title case converter is an online text and word processing tool it helps you to allow any text you would like to select title case converter and transform different cases.",
        "brand": {
          "@type": "Brand",
          "name": "Convert case"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "2500"
        }
      }
    }
  },
  {
    path: 'vaporwave-widetext-convertor',
    component: WideTextConvertorComponent,
  },
  {
    path: 'insta',
    component: FontGenaratorComponent
  },
  {
    path: 'bindarycode-to-english-translator',
    component: StringToBinaryComponent,
    data: {
      title: 'Binary Translator| Binary to English Converter | Text Convert Case',
      description: 'Text convert case is the best tool in USA. Convert binary code to English. This converter is a simple, fast and free tool to convert between binary and text.',
      keyword: 'Binary Code to English'
    }
  },
  {
    path: 'english-to-binary-translator',
    component: EnglishToBinaryComponent,
    data: {
      title: 'English To Binary Translator Online Tool USA | Text Convert Case',
      description: 'Text Convert Case is one of the best online tool in USA from which you can convert English To Binary in a few seconds. Explore Now',
      keyword: 'english to binary translator, english to binary, eng to binary',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/english-to-binary-translator",
        "name": "english to binary translator",
        "image": "",
        "description": "english to binary translator is an online text and word processing tool it helps you to allow any text you would like to select english to binary translator and transform different cases.",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4800"
        }
      }
    }
  },
  {
    path: 'json-stringify-text',
    component: StringJsonStringfyComponent,
    data: {
      title: 'json-stringify-text Online Tool USA | Text Convert Case',
      description: 'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },
  {
    path:'binary-translator',
    loadChildren: () => import('../app/binary-translator/binary-translator.module').then(m => m.BinaryTranslatorModule)
  },
  {
    path:'cm-to-inches',
    loadChildren: () => import('../app/length-caculator/length-caculator.module').then(m => m.LengthCaculatorModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponentComponent,
    data: {
      title: 'Page Not Found | Text Convert Case',
      description: 'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
