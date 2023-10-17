import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://652e0131f9afa8ef4b27f47f.mockapi.io' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => (`/contacts`),
        providesTags: ["Contacts"]
      }),
      addContact: builder.mutation({
        query: (contact) => ({url:'/contacts', method: 'POST', body: contact}),
        invalidatesTags: ['Contacts'],
      }),
      deleteContact: builder.mutation({
        query: (Id) => ({url:`/contacts/${Id}`, method:'DELETE'}),
        invalidatesTags: ['Contacts'],
      })
    }),
  })
  
 console.log(contactsApi)
  export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;