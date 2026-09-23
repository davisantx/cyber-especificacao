import React, { useState } from 'react';
import { ClipboardCheck, Download, Award, CheckCircle2 } from 'lucide-react';

/**
 * EvaluationScreen: Instrumento formal de avaliação de satisfação e aprendizagem
 * em estrita conformidade com a Meta 4 (Item 4.3) do projeto "Bytes para Cidadania" (IFCE Itapipoca).
 */
export const EvaluationScreen = ({ stats, onRestart }) => {
  const [satisfaction, setSatisfaction] = useState('muito_legal');
  const [fixacao, setFixacao] = useState('checar_fonte');
  const [confianca, setConfianca] = useState('sim');
  const [schoolName, setSchoolName] = useState('Escola Pública de Itapipoca');
  const [gradeClass, setGradeClass] = useState('7º Ano A');
  const [saved, setSaved] = useState(false);

  const handleDownloadReport = () => {
    const reportData = {
      projeto: "Bytes para Cidadania — IFCE Campus Itapipoca",
      disciplina: "Projeto Social (40h)",
      coordenador: "Prof. Me. Luciano Martins Jr.",
      missao: "Operação Camisa 10: O Mistério da Rifa do Interclasses",
      dataExecucao: new Date().toLocaleDateString('pt-BR'),
      escola: schoolName,
      turma: gradeClass,
      estatisticasFinais: {
        revoltaFinal: `${stats.revolta}%`,
        investigacaoFinal: `${stats.investigacao}%`,
        resultado: stats.investigacao >= 65 && stats.revolta < 55 ? 'Good Ending (Vitória da Verdade)' : 'Final Alternativo'
      },
      avaliacaoPedagogicaMeta4_3: {
        satisfacaoTurma: satisfaction,
        fixacaoConceito: fixacao,
        confiancaCidadaniaAtiva: confianca
      }
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Relatorio_Extensao_${gradeClass.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
  };

  return (
    <div className="relative z-30 w-full min-h-screen flex items-center justify-center p-4 select-none">
      <div className="max-w-2xl w-full bg-slate-950/95 border-2 border-teal-500/60 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-100 animate-pop">
        
        <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base md:text-xl font-black text-slate-100 uppercase tracking-wide">
              Avaliação de Aprendizagem & Satisfação
            </h2>
            <p className="text-xs text-slate-400">
              Meta 4 (Item 4.3) — Projeto de Extensão Bytes para Cidadania (IFCE)
            </p>
          </div>
        </div>

        {/* Campos da Escola / Turma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1">Escola Visitada:</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:border-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1">Turma Atendida:</label>
            <input
              type="text"
              value={gradeClass}
              onChange={(e) => setGradeClass(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-100 focus:border-teal-400 outline-none"
            />
          </div>
        </div>

        {/* Pergunta 1: Satisfação */}
        <div className="mb-5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xs md:text-sm font-bold text-slate-200 mb-3">
            1. O que a turma achou do jogo de RPG interativo?
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'muito_legal', label: '😄 Muito Legal', color: 'teal' },
              { id: 'mais_ou_menos', label: '😐 Mais ou Menos', color: 'amber' },
              { id: 'chato', label: '🙁 Chato', color: 'rose' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSatisfaction(opt.id)}
                className={`py-2.5 px-2 rounded-xl text-xs font-black border transition-all ${
                  satisfaction === opt.id
                    ? 'bg-teal-500/30 border-teal-400 text-teal-200 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pergunta 2: Fixação Pedagógica */}
        <div className="mb-5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xs md:text-sm font-bold text-slate-200 mb-3">
            2. Qual o primeiro passo que vocês darão ao receber uma notícia alarmante ou link suspeito?
          </h3>
          <div className="space-y-2">
            {[
              { id: 'checar_fonte', label: '🔍 Checar a mensagem original e fontes confiáveis antes de julgar' },
              { id: 'perguntar_amigos', label: '🗣️ Perguntar antes de sair repassando em outros grupos' },
              { id: 'nao_clicar_links', label: '🚫 Jamais clicar em links suspeitos com promessa de prêmios' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFixacao(opt.id)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
                  fixacao === opt.id
                    ? 'bg-teal-500/30 border-teal-400 text-teal-100 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${fixacao === opt.id ? 'border-teal-400 bg-teal-400' : 'border-slate-600'}`} />
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pergunta 3: Cidadania Ativa */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xs md:text-sm font-bold text-slate-200 mb-3">
            3. Vocês se sentem mais confiantes para identificar golpes e agir com empatia na internet?
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'sim', label: '✅ Sim, com certeza!' },
              { id: 'talvez', label: '🤔 Um pouco mais' },
              { id: 'nao', label: '❌ Ainda tenho dúvidas' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setConfianca(opt.id)}
                className={`py-2.5 px-2 rounded-xl text-xs font-black border transition-all ${
                  confianca === opt.id
                    ? 'bg-teal-500/30 border-teal-400 text-teal-200 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Exportar Relatório */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadReport}
            className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs md:text-sm font-black tracking-wide uppercase flex items-center justify-center gap-2 shadow-xl hover:shadow-teal-500/30 transition-transform active:scale-95"
          >
            {saved ? <CheckCircle2 className="w-5 h-5" /> : <Download className="w-5 h-5" />}
            <span>{saved ? 'Relatório Baixado!' : 'Baixar Dados para o Relatório do IFCE'}</span>
          </button>

          <button
            onClick={onRestart}
            className="py-3 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
          >
            Início
          </button>
        </div>

      </div>
    </div>
  );
};
