/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsuarios = /* GraphQL */ `
  subscription OnCreateUsuarios {
    onCreateUsuarios {
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
export const onUpdateUsuarios = /* GraphQL */ `
  subscription OnUpdateUsuarios {
    onUpdateUsuarios {
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
export const onDeleteUsuarios = /* GraphQL */ `
  subscription OnDeleteUsuarios {
    onDeleteUsuarios {
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
export const onCreateMensajes = /* GraphQL */ `
  subscription OnCreateMensajes {
    onCreateMensajes {
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
export const onUpdateMensajes = /* GraphQL */ `
  subscription OnUpdateMensajes {
    onUpdateMensajes {
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
export const onDeleteMensajes = /* GraphQL */ `
  subscription OnDeleteMensajes {
    onDeleteMensajes {
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
