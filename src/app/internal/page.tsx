'use client'

import { useState, useEffect } from 'react'

type TriviaCode = {
  id: string
  code: string
  description: string
  value: string
  status: string
  redemptionDate: string | null
}

export default function CodigosTrivia() {
  const [codes, setCodes] = useState<TriviaCode[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')
  const [redeemCode, setRedeemCode] = useState('')
  const [redeemStatus, setRedeemStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [showModal, setShowModal] = useState(false)
  const [selectedCodeForModal, setSelectedCodeForModal] = useState<TriviaCode | null>(null)

  // Fetch codes on mount
  useEffect(() => {
    fetchCodes()
  }, [])

  const fetchCodes = async () => {
    try {
      setLoading(true)
      // Add cache busting to ensure fresh data
      const response = await fetch(`/api/trivia-codes?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      const data = await response.json()
      setCodes(data.codes || [])
      setDataSource(data.source || 'unknown')
    } catch (error) {
      console.error('Error fetching codes:', error)
      setRedeemStatus({
        type: 'error',
        message: 'Error al cargar los códigos. Intenta recargar la página.',
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredCodes = codes.filter(
    (code) =>
      code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRedeem = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const code = codes.find(
      (c) => c.code.toLowerCase() === redeemCode.toLowerCase()
    )

    if (!code) {
      setRedeemStatus({
        type: 'error',
        message: 'Código no encontrado. Verifica e intenta nuevamente.',
      })
      return
    }

    if (code.status === 'redeemed') {
      setRedeemStatus({
        type: 'error',
        message: `Este código ya fue canjeado${code.redemptionDate ? ` el ${code.redemptionDate}` : ''}.`,
      })
      return
    }

    // Call API to redeem code (updates Google Sheet via n8n)
    try {
      const response = await fetch('/api/redeem-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code.code }),
      })

      const result = await response.json()

      if (result.success) {
        setRedeemStatus({
          type: 'success',
          message: `¡Código ${code.code} canjeado exitosamente! ${code.description}`,
        })
        setRedeemCode('')
        
        // Refresh codes after 2 seconds to show updated status
        setTimeout(() => {
          fetchCodes()
        }, 2000)
        
        // Clear status after 5 seconds
        setTimeout(() => {
          setRedeemStatus({ type: null, message: '' })
        }, 5000)
      } else {
        setRedeemStatus({
          type: 'error',
          message: result.message || 'Error al canjear código',
        })
      }
    } catch (error) {
      console.error('Error redeeming code:', error)
      setRedeemStatus({
        type: 'error',
        message: 'Error de conexión. Intenta nuevamente.',
      })
    }
  }

  const openModal = (code: TriviaCode) => {
    setSelectedCodeForModal(code)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCodeForModal(null)
    setRedeemStatus({ type: null, message: '' })
  }

  const handleModalRedeem = async () => {
    if (!selectedCodeForModal) return

    if (selectedCodeForModal.status === 'redeemed') {
      setRedeemStatus({
        type: 'error',
        message: `Este código ya fue canjeado${selectedCodeForModal.redemptionDate ? ` el ${selectedCodeForModal.redemptionDate}` : ''}.`,
      })
      return
    }

    try {
      const response = await fetch('/api/redeem-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: selectedCodeForModal.code }),
      })

      const result = await response.json()

      if (result.success) {
        setRedeemStatus({
          type: 'success',
          message: `¡Código ${selectedCodeForModal.code} canjeado exitosamente!`,
        })
        
        // Refresh codes after 2 seconds
        setTimeout(() => {
          fetchCodes()
          closeModal()
        }, 2000)
      } else {
        setRedeemStatus({
          type: 'error',
          message: result.message || 'Error al canjear código',
        })
      }
    } catch (error) {
      console.error('Error redeeming code:', error)
      setRedeemStatus({
        type: 'error',
        message: 'Error de conexión. Intenta nuevamente.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-lg p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Códigos Trivia RAY
                </h1>
                <p className="text-sm text-gray-500">
                  Gestión de códigos promocionales
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchCodes}
                disabled={loading}
                className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                title="Recargar códigos"
              >
                <svg
                  className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {loading ? 'Cargando...' : 'Actualizar'}
              </button>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {codes.filter((c) => c.status === 'active').length}{' '}
                  activos
                </p>
                <p className="text-xs text-gray-500">
                  {codes.length} totales
                  {dataSource === 'n8n' && (
                    <span className="ml-1" title="Datos de n8n">
                      🔄
                    </span>
                  )}
                  {dataSource === 'mock' && (
                    <span className="ml-1" title="Datos de ejemplo">
                      🧪
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Redeem Code Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Canjear Código</h2>
          <p className="text-purple-100 mb-6">
            Ingresa tu código de trivia para obtener tu premio
          </p>

          <form onSubmit={handleRedeem} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={redeemCode}
              onChange={(e) => setRedeemCode(e.target.value.toUpperCase())}
              placeholder="Ej: TEMPLE2024"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Canjear
            </button>
          </form>

          {redeemStatus.message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                redeemStatus.type === 'success'
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {redeemStatus.type === 'success' ? (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
                <p className="font-medium">{redeemStatus.message}</p>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar códigos..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 animate-pulse"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-6 w-16 bg-gray-200 rounded-full" />
                  <div className="h-6 w-12 bg-gray-200 rounded" />
                </div>
                <div className="h-8 w-32 bg-gray-200 rounded mb-3" />
                <div className="h-10 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-1 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Codes Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCodes.map((code) => (
            <div
              key={code.id}
              onClick={() => openModal(code)}
              className={`bg-white rounded-xl p-6 border-2 transition-all ${
                code.status === 'active'
                  ? 'border-gray-200 hover:border-purple-400 hover:shadow-lg cursor-pointer'
                  : 'border-gray-200 opacity-60 bg-gray-50 cursor-pointer'
              }`}
            >
              {/* Status Badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    code.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {code.status === 'active' ? 'Activo' : 'Redimido'}
                </span>
              </div>

              {/* Code */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    Código
                  </span>
                </div>
                <p className="font-mono font-bold text-xl text-gray-900 tracking-wide">
                  {code.code}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                {code.description}
              </p>

              {/* Footer Info */}
              {code.status === 'redeemed' && code.redemptionDate && (
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Redimido: {code.redemptionDate}</span>
                  </div>
                </div>
              )}
            </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredCodes.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-lg">
              No se encontraron códigos con ese criterio
            </p>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && selectedCodeForModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Status Badge */}
            <div className="mb-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedCodeForModal.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {selectedCodeForModal.status === 'active' ? 'Activo' : 'Redimido'}
              </span>
            </div>

            {/* Code */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 uppercase mb-2">Código</p>
              <p className="font-mono font-bold text-4xl text-gray-900 tracking-wider mb-4">
                {selectedCodeForModal.code}
              </p>
              <p className="text-gray-600">{selectedCodeForModal.description}</p>
            </div>

            {/* Redemption Date if redeemed */}
            {selectedCodeForModal.status === 'redeemed' && selectedCodeForModal.redemptionDate && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-red-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Redimido el {selectedCodeForModal.redemptionDate}</span>
                </div>
              </div>
            )}

            {/* Status Messages */}
            {redeemStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  redeemStatus.type === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {redeemStatus.type === 'success' ? (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  <p className="font-medium">{redeemStatus.message}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cerrar
              </button>
              {selectedCodeForModal.status === 'active' && (
                <button
                  onClick={handleModalRedeem}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Canjear
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

