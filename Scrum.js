import React, { useState } from 'react';

const SprintPlanning = () => {
  const [webPage, setWebPage] = useState(false);
  const [whatsappGroup, setWhatsappGroup] = useState(false);
  const [database, setDatabase] = useState(false);

  const handleToggleWebPage = () => {
    setWebPage(!webPage);
  };

  const handleToggleWhatsappGroup = () => {
    setWhatsappGroup(!whatsappGroup);
  };

  const handleToggleDatabase = () => {
    setDatabase(!database);
  };

  return (
    <div>
      <h2>Sprint Planning</h2>
      <div>
        <input
          type="checkbox"
          id="webPage"
          checked={webPage}
          onChange={handleToggleWebPage}
        />
        <label htmlFor="webPage">Elaborar una página web para solventar problemas de comunicación</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="whatsappGroup"
          checked={whatsappGroup}
          onChange={handleToggleWhatsappGroup}
        />
        <label htmlFor="whatsappGroup">Elaborar un grupo de WhatsApp para conectar a los vecinos</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="database"
          checked={database}
          onChange={handleToggleDatabase}
        />
        <label htmlFor="database">Elaborar una base de datos donde almacenar los datos de la Residencia</label>
      </div>
      <h3>Objetivos para el Sprint:</h3>
      <ul>
        {webPage && <li>Elaborar la página web para solventar problemas de comunicación</li>}
        {whatsappGroup && <li>Crear un grupo de WhatsApp para conectar a los vecinos</li>}
        {database && <li>Desarrollar una base de datos para almacenar los datos de la Residencia</li>}
      </ul>
    </div>
  );
};

export default SprintPlanning;