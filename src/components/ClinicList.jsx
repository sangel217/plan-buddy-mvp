import React from "react";
import Clinic from './Clinic';


var masterClinicList = [
    {
        name: 'Planned Parenthood Central District',
        address: '2001 E Madison St, Seattle, WA 98122',
        phone: '800-769-0045',
        rate: 4.5,
        image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/f4/5b/f45bde75-0996-4dfa-be40-65f19e15fdfa/meridian-idaho-pp140637.jpg__1200x1200_q65_subsampling-2.jpg',
        website: 'https://www.plannedparenthood.org/health-center/washington/seattle/98122/central-district-health-center-3309-91810'
    },
    {
        name: 'Planned Parenthood First Hill',
        address: '1229 Madison St, Seattle, WA 98104',
        phone: '800-769-0045',
        rate: 4.5,
        image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/f4/5b/f45bde75-0996-4dfa-be40-65f19e15fdfa/meridian-idaho-pp140637.jpg__1200x1200_q65_subsampling-2.jpg',
        website: 'https://www.plannedparenthood.org/health-center/washington/seattle/98104/first-hill-health-center-4069-91810'
    },
    {
        name: 'Planned Parenthood Northgate',
        address: '1200 N Northgate Way, Seattle, WA 98133',
        phone: '800-769-0045',
        rate: 4,
        image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/f4/5b/f45bde75-0996-4dfa-be40-65f19e15fdfa/meridian-idaho-pp140637.jpg__1200x1200_q65_subsampling-2.jpg',
        website: 'https://www.plannedparenthood.org/health-center/washington/seattle/98133/northgate-health-center-3975-91810'
    },
    {
        name: 'Planned Parenthood University District',
        address: '5020 Roosevelt Way NE, Seattle, Wa 98105',
        phone: '800-769-0045',
        rate: 4,
        image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/f4/5b/f45bde75-0996-4dfa-be40-65f19e15fdfa/meridian-idaho-pp140637.jpg__1200x1200_q65_subsampling-2.jpg',
        website: 'https://www.plannedparenthood.org/health-center/washington/seattle/98105/university-district-health-center-2532-91810'
    },
    {
        name: 'Planned Parenthood White Center',
        address: '9942 8th Ave SW, Seattle, WA 98106',
        phone: '800-769-0045',
        rate: 4,
        image: 'https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/f4/5b/f45bde75-0996-4dfa-be40-65f19e15fdfa/meridian-idaho-pp140637.jpg__1200x1200_q65_subsampling-2.jpg',
        website: 'https://www.plannedparenthood.org/health-center/washington/seattle/98106/white-center-health-center-4161-91810'
    }
];

function ClinicList(){
    return(
        <div>
            {masterClinicList.map((clinic, index) => 
              <Clinic name={clinic.name}
                address={clinic.address}
                phone={clinic.phone}
                rate={clinic.rate}
                image={clinic.image}
                website={clinic.website}
                key={index}/>
            )}
        </div>
        
    );
}

export default ClinicList;