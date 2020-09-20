/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsuarios = /* GraphQL */ `
  query GetUsuarios($id: ID!) {
    getUsuarios(id: $id) {
      id
      name
      mensaje {
        items {
          id
          idUsuario
          mensaje
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsuarioss = /* GraphQL */ `
  query ListUsuarioss(
    $filter: ModelUsuariosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarioss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mensaje {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMensajes = /* GraphQL */ `
  query GetMensajes($id: ID!) {
    getMensajes(id: $id) {
      id
      idUsuario
      usuario {
        id
        name
        mensaje {
          nextToken
        }
        createdAt
        updatedAt
      }
      mensaje
      createdAt
      updatedAt
    }
  }
`;
export const listMensajess = /* GraphQL */ `
  query ListMensajess(
    $filter: ModelMensajesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMensajess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idUsuario
        usuario {
          id
          name
          createdAt
          updatedAt
        }
        mensaje
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
