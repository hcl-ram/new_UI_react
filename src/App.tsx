import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PatientAliasesPage from './pages/PatientAliasesPage';
import { ROUTES } from './constants';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.PATIENT_ALIASES} element={<PatientAliasesPage />} />
        <Route path="/" element={<Navigate to={ROUTES.PATIENT_ALIASES} replace />} />
        <Route path="*" element={<Navigate to={ROUTES.PATIENT_ALIASES} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
