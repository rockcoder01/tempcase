import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinaryToDecimalComponent } from './binary-to-decimal/binary-to-decimal.component';
import { BinaryToHexaComponent } from './binary-to-hexa/binary-to-hexa.component';
import { BinaryToOctalComponent } from './binary-to-octal/binary-to-octal.component';
import { BinaryToTextComponent } from './binary-to-text/binary-to-text.component';
import { BinaryTranslatorComponent } from './binary-translator/binary-translator.component';
import { DecimalToBinaryComponent } from './decimal-to-binary/decimal-to-binary.component';
import { DecimalToHexadecimalComponent } from './decimal-to-hexadecimal/decimal-to-hexadecimal.component';
import { DecimalToOctalComponent } from './decimal-to-octal/decimal-to-octal.component';
import { DecimalToTextComponent } from './decimal-to-text/decimal-to-text.component';
import { HexadecimalToDecimalComponent } from './hexadecimal-to-decimal/hexadecimal-to-decimal.component';
import { HexadecimalToOctalComponent } from './hexadecimal-to-octal/hexadecimal-to-octal.component';
import { HexadecimalToTextComponent } from './hexadecimal-to-text/hexadecimal-to-text.component';
import { HextToBinaryComponent } from './hext-to-binary/hext-to-binary.component';
import { OctalToBinaryComponent } from './octal-to-binary/octal-to-binary.component';
import { OctalToDecimalComponent } from './octal-to-decimal/octal-to-decimal.component';
import { OctalToHexadecimalComponent } from './octal-to-hexadecimal/octal-to-hexadecimal.component';
import { OctalToTextComponent } from './octal-to-text/octal-to-text.component';
import { TextToDecimalComponent } from './text-to-decimal/text-to-decimal.component';
import { TextToHexaComponent } from './text-to-hexa/text-to-hexa.component';
import { TextToOctalComponent } from './text-to-octal/text-to-octal.component';

const routes: Routes = [
  {
    path: 'binary-to-octal-converter',
    component: BinaryToOctalComponent,
    data: {
      title: 'Quickly Convert Binary to Octal with Our Online Binary to Octal Converter Tool| Text-convertcase.net',
      description: 'Easily convert binary to octal using our fast and accurate online Binary to Octal Converter. Try it out now!',
      keyword: 'binary to octal converter, binary to octal translator, binary to octal converter tool, Binary code to octal, Binary calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/binary-to-octal-converter",
        "name": "Quickly Convert Binary to Octal with Our Online Binary to Octal Converter Tool| Text-convertcase.net",
        "image": "",
        "description": "Easily convert binary to octal using our fast and accurate online Binary to Octal Converter. Try it out now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4400"
        }
      }
    }
  },
  {
    path: 'octal-to-binary-converter',
    component: OctalToBinaryComponent,
    data: {
      title: 'Efficiently Convert Octal to Binary with Our Online Octal To Binary Converter | Text-convertcase.net',
      description: 'Quickly and easily convert octal to binary using our online Octal To Binary Converter. Give it a try now',
      keyword: 'octal to binary converter,Octal code to binary, Binary to octal, Octal calculator, Octal to decimal, Octal to hexadecimal, octal to binary converter online, octal to binary conversion, octal to binary translator, octal to binary convert online',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/octal-to-binary-converter",
        "name": "Efficiently Convert Octal to Binary with Our Online Octal To Binary Converter | Text-convertcase.net",
        "image": "",
        "description": "Quickly and easily convert octal to binary using our online Octal To Binary Converter. Give it a try now",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "5600"
        }
      }
    }
  },
  {
    path: 'binary-to-hexadecimal-converter',
    component: BinaryToHexaComponent,
    data: {
      title: 'Binary to Hexadecimal Converter | Text-convertcase.net',
      description: 'Convert binary to hexadecimal quickly and easily with our online Binary To Hexadecimal Converter. Try it out now!',
      keyword: 'binary to hexadecimal converter, binary to hexadecimal translator, binary to hexadecimal conversion, binary to hexadecimal online tool',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/binary-to-hexadecimal-converter",
        "name": "Binary to Hexadecimal Converter | Text-convertcase.net",
        "image": "",
        "description": "Convert binary to hexadecimal quickly and easily with our online Binary To Hexadecimal Converter. Try it out now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4100"
        }
      }
    }
  },
  {
    path: 'binary-to-decimal-converter',
    component: BinaryToDecimalComponent,
    data: {
      title: 'Binary to Decimal Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Effortlessly convert binary to decimal using our fast and accurate online Binary To Decimal Converter. Try it now!',
      keyword: 'binary to decimal converter,Binary code to decimal,Decimal to binary,Binary calculator, binary to decimal translator, binary to decimal conversion, binary to decimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/binary-to-decimal-converter",
        "name": "Binary to Decimal Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Effortlessly convert binary to decimal using our fast and accurate online Binary To Decimal Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4100"
        }
      }
    }
  },
  {
    path: 'decimal-to-binary-converter',
    component: DecimalToBinaryComponent,
    data: {
      title: 'Decimal to Binary Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Convert decimal to binary quickly and easily with our online Decimal To Binary Converter. Give it a try now!',
      keyword: 'decimal to binary converter, decimal to binary translator, decimal to binary conversion, decimal to binary calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/decimal-to-binary-converter",
        "name": "Decimal to Binary Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Convert decimal to binary quickly and easily with our online Decimal To Binary Converter. Give it a try now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "4100"
        }
      }
    }
  },
  {
    path: 'hexadecimal-to-binary-converter',
    component: HextToBinaryComponent,
    data: {
      title: 'Hexadecimal to Binary Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Effortlessly convert hexadecimal to binary using our fast and accurate online Hexadecimal To Binary Converter. Try it now!',
      keyword: 'hexadecimal to binary converter, hexadecimal to binary translator, hexadecimal to binary conversion, hexadecimal to binary calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/hexadecimal-to-binary-converter",
        "name": "Hexadecimal to Binary Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Effortlessly convert hexadecimal to binary using our fast and accurate online Hexadecimal To Binary Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
  {
    path: 'octal-to-decimal-converter',
    component: OctalToDecimalComponent
    ,
    data: {
      title: 'Octal to Decimal Converter | Quick & Easy Conversion | Text-convertcase.net',
      description: "Effortlessly convert octal to decimal using our fast and accurate online Octal To Decimal Converter. Try it now!",
      keyword: 'octal to decimal converter, octal to decimal translator, octal to decimal conversion, octal to decimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/octal-to-decimal-converter",
        "name": "Octal to Decimal Converter | Quick & Easy Conversion | Text-convertcase.net",
        "image": "",
        "description": "Effortlessly convert octal to decimal using our fast and accurate online Octal To Decimal Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
  {
    path: 'octal-to-hexadecimal-converter',
    component: OctalToHexadecimalComponent
    ,
    data: {
      title: 'Octal to Hexadecimal Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Easily convert octal to hexadecimal using our fast and accurate online Octal To Hexadecimal Converter. Try it now!',
      keyword: 'octal to hexadecimal converter, octal to hexadecimal translator, octal to hexadecimal conversion, octal to hexadecimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/octal-to-hexadecimal-converter",
        "name": "Octal to Hexadecimal Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Easily convert octal to hexadecimal using our fast and accurate online Octal To Hexadecimal Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3700"
        }
      }
    }
  },
  {
    path: 'hexadecimal-to-octal-converter',
    component: HexadecimalToOctalComponent
    , 
    data: {
      title: 'Hexadecimal to Octal Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Convert hexadecimal to octal quickly and easily with our online Hexadecimal To Octal Converter. Try it out now!',
      keyword: 'hexadecimal to octal converter, hexadecimal to octal translator, hexadecimal to octal conversion, hexadecimal to octal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/hexadecimal-to-octal-converter",
        "name": "Hexadecimal to Octal Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Convert hexadecimal to octal quickly and easily with our online Hexadecimal To Octal Converter. Try it out now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3700"
        }
      }
    }
  },
  {
    path: 'hexadecimal-to-decimal-converter',
    component: HexadecimalToDecimalComponent
    ,
    data: {
      title: 'Hexadecimal to Decimal Converter | Quick & Easy Conversion | Text-convertcase.net',
      description: 'Easily convert hexadecimal to decimal using our fast and accurate online Hexadecimal To Decimal Converter. Try it now!',
      keyword: 'hexadecimal to decimal converter, hexadecimal to decimal translator, hexadecimal to decimal conversion, hexadecimal to decimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/hexadecimal-to-decimal-converter",
        "name": "Hexadecimal to Decimal Converter | Quick & Easy Conversion | Text-convertcase.net",
        "image": "",
        "description": "Easily convert hexadecimal to decimal using our fast and accurate online Hexadecimal To Decimal Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3700"
        }
      }
    }
  },
  {
    path: 'decimal-to-hexadecimal-converter',
    component: DecimalToHexadecimalComponent
    ,
    data: {
      title: 'Decimal to Hexadecimal Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Convert decimal to hexadecimal quickly and easily with our online Decimal To Hexadecimal Converter. Give it a try now!',
      keyword: 'decimal to hexadecimal converter, decimal to hexadecimal translator, decimal to hexadecimal conversion, decimal to hexadecimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/decimal-to-hexadecimal-converter",
        "name": "Decimal to Hexadecimal Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Convert decimal to hexadecimal quickly and easily with our online Decimal To Hexadecimal Converter. Give it a try now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }    
    }
  },
  {
    path: 'decimal-to-octal-converter',
    component: DecimalToOctalComponent
    ,
    data: {
      title: 'Decimal to Octal Converter | Quick & Easy Conversion | Text-convertcase.net',
      description: 'Convert decimal to octal in a snap with our fast and accurate online Decimal To Octal Converter. Give it a try now!',
      keyword: 'decimal to octal converter, decimal to octal translator, decimal to octal conversion, decimal to octal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/decimal-to-octal-converter",
        "name": "Decimal to Octal Converter | Quick & Easy Conversion | Text-convertcase.net",
        "image": "",
        "description": "Convert decimal to octal in a snap with our fast and accurate online Decimal To Octal Converter. Give it a try now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }   
    }
  },
  {
    path: 'binary-to-text-converter',
    component: BinaryToTextComponent
    ,
    data: {
      title: 'Binary to Text Converter | Easy & Accurate Conversion | Text-convertcase.net',
      description: 'Effortlessly convert binary to text with our fast and accurate online Binary To Text Converter. Try it now!',
      keyword: 'binary to text converter, binary to text translator, binary to text conversion, binary to text calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/binary-to-text-converter",
        "name": "Binary to Text Converter | Easy & Accurate Conversion | Text-convertcase.net",
        "image": "",
        "description": "Effortlessly convert binary to text with our fast and accurate online Binary To Text Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }   
    }
  },
  {
    path: 'decimal-to-text-converter',
    component: DecimalToTextComponent
    ,
    data: {
      title: 'Decimal to Text Converter | Quick & Easy Conversion | Text-convertcase.net',
      description: 'Easily convert decimal to text using our fast and accurate online Decimal To Text Converter. Try it now!',
      keyword: 'decimal to text converter, decimal to text translator, decimal to text conversion, decimal to text calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/decimal-to-text-converter",
        "name": "Decimal to Text Converter | Quick & Easy Conversion | Text-convertcase.net",
        "image": "",
        "description": "Easily convert decimal to text using our fast and accurate online Decimal To Text Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }   
    }
  },
  {
    path: 'hexadecimal-to-text-converter',
    component: HexadecimalToTextComponent
    ,
    data: {
      title: 'Hexadecimal to Text Converter | Fast & Accurate | Text-convertcase.net',
      description: 'Effortlessly convert hexadecimal to text with our fast and accurate online Hexadecimal To Text Converter. Try it now!',
      keyword: 'hexadecimal to text converter, hexadecimal to text translator, hexadecimal to text conversion, hexadecimal to text calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/hexadecimal-to-text-converter",
        "name": "Hexadecimal to Text Converter | Fast & Accurate | Text-convertcase.net",
        "image": "",
        "description": "Effortlessly convert hexadecimal to text with our fast and accurate online Hexadecimal To Text Converter. Try it now!",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }
    }
  },
  {
    path: 'octal-to-text-converter',
    component: OctalToTextComponent
    ,
    data: {
      title: 'Octal to Text Converter | Quick & Easy Conversion | Text-convertcase.net',
      description: 'octal to text converter is an online  processing utility it helps you to allow any octal to text translate',
      keyword: 'octal to text converter, octal to text translator, octal to text conversion, octal to text calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/octal-to-text-converter",
        "name": "Octal to Text Converter | Quick & Easy Conversion | Text-convertcase.net",
        "image": "",
        "description": "octal to text converter is an online  processing utility it helps you to allow any octal to text translate",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3100"
        }
      }
    }
  },
  {
    path: 'text-to-octal-converter',
    component: TextToOctalComponent
    ,
    data: {
      title: 'text to octal converter | Text-convertcase.net',
      description: 'text to octal converter is an online  processing utility it helps you to allow any text to octal translate',
      keyword: 'text to octal converter, text to octal translator, text to octal conversion, text to octal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/text-to-octal-converter",
        "name": "text to octal converter",
        "image": "",
        "description": "text to octal converter is an online  processing utility it helps you to allow any text to octal translate",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
  {
    path: 'text-to-hexadecimal-converter',
    component: TextToHexaComponent
    ,
    data: {
      title: 'text to hexadecimal converter | Text-convertcase.net',
      description: 'text to hexadecimal converter is an online  processing utility it helps you to allow any text to hexa translate',
      keyword: 'text to hexadecimal converter, text to hexadecimal translator, text to hexadecimal conversion, text to hexadecimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/text-to-hexadecimal-converter",
        "name": "text to hexadecimal converter",
        "image": "",
        "description": "text to hexadecimal converter is an online  processing utility it helps you to allow any text to hexa translate",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
  {
    path: 'text-to-decimal-converter',
    component: TextToDecimalComponent
    ,
    data: {
      title: 'text to decimal converter | Text-convertcase.net',
      description: 'text to decimal converter is an online  processing utility it helps you to allow any text to decimal translate',
      keyword: 'text to decimal converter, text to decimal translator, text to decimal conversion, text to decimal calculator',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator/text-to-decimal-converter",
        "name": "text to decimal converter",
        "image": "",
        "description": "text to decimal converter is an online  processing utility it helps you to allow any text to decimal translate",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
  {
    path: '',
    component: BinaryTranslatorComponent,
    pathMatch: 'full'
    ,
    data: {
      title: 'Quickly and Accurately Translate Binary Code with Our Online Binary Translator | Text-convertcase.net',
      description: 'Convert binary to decimal, hexadecimal, text, or octal with our fast and accurate online binary translator. Try it out now',
      keyword: 'Binary code, Binary conversion, Binary translator, Text to binary, Binary to text, Binary calculator, Binary to decimal, Binary to hexadecimal, Binary to octal',
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "url": "https://text-convertcase.net/binary-translator",
        "name": "Quickly and Accurately Translate Binary Code with Our Online Binary Translator | Text-convertcase.net",
        "image": "",
        "description": "Convert binary to decimal, hexadecimal, text, or octal with our fast and accurate online binary translator. Try it out now",
        "brand": {
          "@type": "Brand",
          "name": "text-convertcase"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "3500"
        }
      }
    }
  },
];
// binary to decimal converter tool blog with seo in 500 word top rank keyword with
// Instagram Font Generator content in 400 word with optimazation
//Easily Convert Text Case with Our Convert Case Tool 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinaryTranslatorRoutingModule { }
