import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GroupService from '../../infrastructure/services/GroupService'; 
import ModalityService from '../../infrastructure/services/ModalityService'; 

const CreateGroupPage = () => {
    const [groupName, setGroupName] = useState('');
    const [address, setAddress] = useState('');
    const [modality, setModality] = useState('');
    const [schedules, setSchedules] = useState([{ day: '', startTime: '', endTime: '' }]);
    const [modalities, setModalities] = useState([]); 
    const groupService = new GroupService(); 
    const modalityService = new ModalityService(); 
    const daysOfWeek = [
        'Domingo', 
        'Segunda-feira', 
        'Terça-feira', 
        'Quarta-feira', 
        'Quinta-feira', 
        'Sexta-feira', 
        'Sábado'
    ];

    useEffect(() => {
        const fetchModalities = async () => {
            try {
                const result = await modalityService.getAllModalities();
                console.log(result);
                setModalities(result); 
            } catch (error) {
                console.error('Erro ao buscar modalidades:', error.message);
            }
        };

        fetchModalities();
    }, []); 

    const handleAddSchedule = () => {
        setSchedules([...schedules, { day: '', startTime: '', endTime: '' }]);
    };

    const handleScheduleChange = (index, field, value) => {
        const newSchedules = schedules.map((schedule, i) => (
            i === index ? { ...schedule, [field]: value } : schedule
        ));
        setSchedules(newSchedules);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const groupData = {
            groupName,
            address,
            modality,
            schedules
        };

        try {
            const result = await groupService.createGroup(groupData); 
            console.log('Success:', result);
            // Aqui você pode redirecionar ou dar um feedback ao usuário sobre o sucesso
        } catch (error) {
            console.error('Error:', error.message);
            // Aqui você pode mostrar uma mensagem de erro ao usuário
        }
    };

    return (
        <div>
            <Header />

            <section className="login_part section_padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>
                                        <img style={{ width: '50%' }} src="/img/Bonecoatras.png" alt="Logo" />
                                    </h2>
                                    <p>Crie seu grupo de futebol</p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>Preencha o Formulário abaixo<br />e clique em salvar</h3>
                                    <form className="row contact_form" onSubmit={handleSubmit} noValidate="novalidate">
                                        <div className="col-md-12 form-group p_star">                                   
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="groupName" 
                                                name="groupName" 
                                                value={groupName}
                                                onChange={(e) => setGroupName(e.target.value)}
                                                placeholder="Nome do Grupo"
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="address" 
                                                name="address" 
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Endereço da Quadra"
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <label>Modalidade</label>
                                            <select 
                                                className="form-control" 
                                                id="modality" 
                                                name="modality" 
                                                value={modality}
                                                onChange={(e) => setModality(e.target.value)}
                                                required
                                            >
                                                <option value="">Selecione a Modalidade</option>
                                                {modalities.map((modalityOption) => (
                                                    <option key={modalityOption.id} value={modalityOption.name}>
                                                        {modalityOption.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <label>Horários</label>
                                            {schedules.map((schedule, index) => (
                                                <div key={index} className="schedule-group">
                                                    <select 
                                                        className="form-control" 
                                                        value={schedule.day} 
                                                        onChange={(e) => handleScheduleChange(index, 'day', e.target.value)} 
                                                        required
                                                    >
                                                        <option value="">Selecione o Dia</option>
                                                        {daysOfWeek.map((day, i) => (
                                                            <option key={i} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    <input 
                                                        type="time" 
                                                        className="form-control" 
                                                        value={schedule.startTime} 
                                                        onChange={(e) => handleScheduleChange(index, 'startTime', e.target.value)} 
                                                        required 
                                                    />
                                                    <input 
                                                        type="time" 
                                                        className="form-control" 
                                                        value={schedule.endTime} 
                                                        onChange={(e) => handleScheduleChange(index, 'endTime', e.target.value)} 
                                                        required 
                                                    />
                                                </div>
                                            ))}
                                            <button type="button" className="btn_3" onClick={handleAddSchedule}>Adicionar Horário</button>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button type="submit" value="submit" className="btn_3">
                                                Criar Grupo
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CreateGroupPage;
