import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovAgtripuraApi implements ICredentialType {
        name = 'N8nDevApisetuGovAgtripuraApi';

        displayName = 'Apisetu Gov Agtripura API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovAgtripura/apisetu-gov-agtripura.svg', dark: 'file:../nodes/ApisetuGovAgtripura/apisetu-gov-agtripura.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/agtripura/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/agtripura/v3',
                        description: 'The base URL of your Apisetu Gov Agtripura API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
