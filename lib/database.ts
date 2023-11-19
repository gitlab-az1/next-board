import { connect as pginit } from 'typesdk/database/postgres';

export const getPostgresConnection = () => pginit();