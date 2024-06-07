import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, ShellBar, ThemeProvider } from '@ui5/webcomponents-react';
import TenantComponent from './components/TenantComponent';
import { Toolbar } from '@ui5/webcomponents-react';
import { useState } from 'react';

export default function Home() {
  const active = '/';
  return (
    <ThemeProvider staticCssInjected>
      <ShellBar
        logo={
          <img
            src="./logo.png"
            alt={'UI5 Web Components for React logo'}
          />
        }
        primaryTitle="Procurement Gateway"
        profile={<Avatar icon={employeeIcon} />}
        className='border-0 block'
      />
      <div className='bg-white h-8 border-b border-gray-200'>
        <Toolbar
          design="Transparent"
          className='pl-8 pr-8 bg-white'
        >
          <span className={`${active == '/' ? 'border-sapInformationColor text-sapInformationColor' : 'border-sapBaseColor text-sapAccentColor10'} border-b-4 p-2`}>
            <span className='text-sm text-sapAccentColor10 hover:text-sapHighlightColor'>Home</span>
          </span>
        </Toolbar>
      </div>
      {/* Add your code here */}
      <TenantComponent />
    </ThemeProvider>
  );
}
