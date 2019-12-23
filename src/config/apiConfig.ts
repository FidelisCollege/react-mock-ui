export interface ApiConfigInterface {
    protocol: string;
    host: string;
    dataApiUrl: string;
    apiUrl: string;
}

export const apiConfig: ApiConfigInterface = {
    protocol: 'https',
    host: 'dev2.fideliseducation.com',
    dataApiUrl: 'api',
    apiUrl: '',
};
