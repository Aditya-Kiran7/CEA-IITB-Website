import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import certificates from '../data/certificate';

function CertificateVerify() {
  const location = useLocation();

  const [certificateId, setCertificateId] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [searched, setSearched] = useState(false);

  const verifyCertificate = (id) => {
    const cleanId = id.trim().toUpperCase();

    if (!cleanId) {
      setCertificate(null);
      setSearched(false);
      return;
    }

    const found = certificates.find(
      (cert) => cert.id.toUpperCase() === cleanId
    );

    setCertificate(found || null);
    setSearched(true);
  };

  // Automatically verify when the URL contains ?id=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromUrl = params.get('id');

    if (idFromUrl) {
      setCertificateId(idFromUrl);
      verifyCertificate(idFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCertificate(certificateId);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '150px',
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '850px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            marginBottom: '20px',
            color: '#ffffff',
          }}
        >
          Certificate Verification
        </h1>

        <p
          style={{
            fontSize: '20px',
            color: '#e0e0e0',
            marginBottom: '30px',
          }}
        >
          Verify the authenticity of a CEA certificate.
        </p>

        {/* Manual verification */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={certificateId}
            onChange={(e) => {
              setCertificateId(e.target.value);
              setSearched(false);
            }}
            placeholder="Enter Certificate ID"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px',
              fontSize: '18px',
              borderRadius: '8px',
              border: '1px solid #aaa',
              marginBottom: '15px',
              background: '#ffffff',
              color: '#111111',
            }}
          />

          <button
            type="submit"
            style={{
              padding: '14px 28px',
              fontSize: '17px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              background: '#ffffff',
              color: '#111111',
              cursor: 'pointer',
            }}
          >
            Verify Certificate
          </button>
        </form>

        {/* Valid certificate */}
        {searched && certificate && (
          <div
            style={{
              marginTop: '45px',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #22c55e',
              background: 'rgba(34, 197, 94, 0.08)',
            }}
          >
            <h2
              style={{
                color: '#22c55e',
                fontSize: '30px',
                marginBottom: '25px',
              }}
            >
              ✓ Certificate Verified
            </h2>

            <p>
              <strong>Name:</strong> {certificate.name}
            </p>

            <p>
              <strong>Certificate ID:</strong> {certificate.id}
            </p>

            <p>
              <strong>Event:</strong> {certificate.event}
            </p>

            <p>
              <strong>Date:</strong> {certificate.date}
            </p>
          </div>
        )}

        {/* Invalid certificate */}
        {searched && !certificate && (
          <div
            style={{
              marginTop: '45px',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #ef4444',
              background: 'rgba(239, 68, 68, 0.08)',
            }}
          >
            <h2
              style={{
                color: '#ef4444',
                fontSize: '30px',
                marginBottom: '15px',
              }}
            >
              ✕ Certificate Not Found
            </h2>

            <p style={{ color: '#e0e0e0' }}>
              No certificate with this ID exists in the official CEA records.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificateVerify;