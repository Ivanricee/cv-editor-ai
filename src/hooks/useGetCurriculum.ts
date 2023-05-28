export function useGetCurriculum() {
  /*
    Si no hay access_token o refresh_token en suztand
      getToken
    Si hay:
      realizar peticion del action (ej getCurriculum)

      Si el action marca error
      getToken
      realizar peticion del action nuevamente.

  */

  /* ---------------- getToken----------------------
    return and store access_token, refresh_token in zustand
   */

  /*---------------- trigger Action:---------------------
    //obtener access_token de suztand
    getCurriculum({access_token})
    store curriculums info in zustand
  */
  return 'asdfasdf'
}
