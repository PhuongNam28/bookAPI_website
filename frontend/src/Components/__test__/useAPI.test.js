// import { renderHook, act } from '@testing-library/react-hooks';
// import axios from 'axios';
// import useAPI from '../useAPI';
// import instance from '../../api/api';

// jest.mock('../../api/api');

// describe('useAPI Hook', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('should return data and set loading to false after successful fetch', async () => {
    
//     const mockData = {
//         kind: "books#volumes",
//         totalItems: 1,
//         items: [
//           {
//             kind: "books#volume",
//             id: "ILJhLib-Pa4C",
//             volumeInfo: {
//               title: "The Hero Book",
//               subtitle: "Learning Lessons from the People You Admire",
//               authors: ["Ellen Sabin"],
//               publisher: "Watering Can Press",
//               publishedDate: "2004",
//               description: "The Hero book invites children to think about the qualities that make people admirable...",
//               industryIdentifiers: [
//                 { type: "ISBN_13", identifier: "9780975986813" },
//                 { type: "ISBN_10", identifier: "0975986813" }
//               ],
//               pageCount: 66,
//               printType: "BOOK",
//               categories: ["Courage"],
//               maturityRating: "NOT_MATURE",
//               imageLinks: {
//                 smallThumbnail: "http://books.google.com/books/content?id=ILJhLib-Pa4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//                 thumbnail: "http://books.google.com/books/content?id=ILJhLib-Pa4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//               },
//               language: "en",
//               previewLink: "http://books.google.com.vn/books?id=ILJhLib-Pa4C&printsec=frontcover&dq=hero&hl=&cd=1&source=gbs_api",
//               infoLink: "http://books.google.com.vn/books?id=ILJhLib-Pa4C&dq=hero&hl=&source=gbs_api",
//               canonicalVolumeLink: "https://books.google.com/books/about/The_Hero_Book.html?hl=&id=ILJhLib-Pa4C"
//             },
//             saleInfo: {
//               country: "VN",
//               saleability: "NOT_FOR_SALE",
//               isEbook: false
//             },
//             accessInfo: {
//               country: "VN",
//               viewability: "PARTIAL",
//               embeddable: true,
//               textToSpeechPermission: "ALLOWED",
//               pdf: {
//                 isAvailable: true,
//                 acsTokenLink: "http://books.google.com.vn/books/download/The_Hero_Book-sample-pdf.acsm?id=ILJhLib-Pa4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//               },
//               webReaderLink: "http://play.google.com/books/reader?id=ILJhLib-Pa4C&hl=&source=gbs_api",
//               accessViewStatus: "SAMPLE",
//               quoteSharingAllowed: false
//             },
//             searchInfo: {
//               textSnippet: "The Hero book invites children to think about the qualities that make people admirable..."
//             }
//           }
//         ]
//       };
//     instance.mockResolvedValue({ data: mockData });

//     const { result, waitForNextUpdate } = renderHook(() => useAPI("hero"));

  
//     expect(result.current.data).toBeNull();
//     expect(result.current.loading).toBe(true);
//     expect(result.current.error).toBeNull();

   
//     await waitForNextUpdate();

  
//     expect(result.current.data).toEqual(mockData);
//     expect(result.current.loading).toBe(false);
//     expect(result.current.error).toBeNull();
//   });

//   test('should set error and loading to false after failed fetch', async () => {
    
//     const mockError = new Error('Network Error');
//     instance.mockRejectedValue(mockError);

//     const { result, waitForNextUpdate } = renderHook(() => useAPI("hero"));

    
//     expect(result.current.data).toBeNull();
//     expect(result.current.loading).toBe(true);
//     expect(result.current.error).toBeNull();

   
//     await waitForNextUpdate();

   
//     expect(result.current.data).toBeNull();
//     expect(result.current.loading).toBe(false);
//     expect(result.current.error).toEqual(mockError);
//   });

// //   test('should update data when URL changes', async () => {
   
// //     const mockData1 = { items: [{ id: 1, name: 'Test Book 1' }] };
// //     const mockData2 = { items: [{ id: 2, name: 'Test Book 2' }] };
// //     instance.mockImplementation(({ url }) => {
// //       if (url === '/test-url') {
// //         return Promise.resolve({ data: mockData1 });
// //       }
// //       if (url === '/test-url-2') {
// //         return Promise.resolve({ data: mockData2 });
// //       }
// //     });

// //     const { result, rerender, waitForNextUpdate } = renderHook(
// //       ({ url }) => useAPI(url),
// //       { initialProps: { url: "hero" } }
// //     );

// //     expect(result.current.data).toBeNull();
// //     expect(result.current.loading).toBe(true);
// //     expect(result.current.error).toBeNull();

    
// //     await waitForNextUpdate();

    
// //     expect(result.current.data).toEqual(mockData1);
// //     expect(result.current.loading).toBe(false);
// //     expect(result.current.error).toBeNull();

   
// //     rerender({ url: "hero" });

    
// //     expect(result.current.data).toEqual(mockData1);
// //     expect(result.current.loading).toBe(true);
// //     expect(result.current.error).toBeNull();

    
// //     await waitForNextUpdate();

   
// //     expect(result.current.data).toEqual(mockData2);
// //     expect(result.current.loading).toBe(false);
// //     expect(result.current.error).toBeNull();
// //   });
// });
