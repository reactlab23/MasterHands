import React from 'react'
import { Link } from 'react-router-dom'
import './documents-condition.scss'

export default function DocumentsCondition() {
    return (
        <div>
            <h1>Условия использования
                продуктов компании
            </h1>
           <div className="condition">
                <div className="content-link">
                <div className="faq-item">
                    <input className="faq-input" type="checkbox" id="faq_1"/>
                    <label className="faq-title" htmlFor="faq_1">Содержание <span><svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.775 9.49756L7.5 3.77256L13.2375 9.49756L15 7.73506L7.5 0.235059L0 7.73506L1.775 9.49756Z" fill="#6A6A6A"/>
                    </svg></span></label>
                    <div className="faq-text">
                    <a href="#area">Область применения (предмет, принятие, изменение)</a>
                    <a href="#reg">Регистрация Пользователя. Учётная запись Пользователя.</a>
                    </div>
                </div>
              </div>
               <div className="condition__left">
               
                <div className="condition__left-title" id="area">
                    Область применения (предмет, принятие, изменение)
                </div>
                <div className="condition__left-text" >
                    <p> Компания предлагает вам свои Продукты при условии, что вы в соответствии с применимым к сторонам законодательством вправе заключить юридически обязательное соглашение
                     (далее — Условия использования) и вами были осуществлены все необходимые действия в целях его заключения.</p>
                     
                    <p> С Условиями использования вам необходимо ознакомиться полностью, поскольку эти положения важны и составляют юридический документ, условия которого будут распространяться
                      на вас как Пользователя, как только вы его примете.</p>
                    
                    <p>Предметом настоящих Условий использования являются условия использования Продуктов Компании, в том числе, но не ограничиваясь: веб-сайтов и/или сервисов, и/или служб, 
                    и/или приложений, и/или программного обеспечения, предоставляемых Компанией.
                    C даты начала использования любого из Продуктов (веб-сайта и/или сервиса, и/или службы, и/или приложения)
                     Компании Пользователь считается принявшим Условия использования в полном объёме, без всяких оговорок и исключений.</p>
                    
                   <p>В случае несогласия Пользователя с какими‑либо из положений Условий использования, Пользователь не вправе использовать Продукты Компании.
                    В случае внесения Компанией изменений в Условия использования или если Пользователь начал использовать   Продукты Компании, но с условиями 
                    не согласен, последний обязан прекратить использование Продуктов Компании. При этом к отношениям, возникшим в период использования Пользователем Продуктов Компании,
                    применяются положения Условий использования, если иное не установлено дополнительно.</p>
                    
                   <p>Использование Продуктов Компании регулируется настоящими Условиями использования, а также отдельными условиями использования отдельных Продуктов и иными документами,
                     размещёнными на официальном сайте Компании.</p>
                     
                   <p>Компания оставляет за собой право пересматривать Условия использования и иные правовые документы Компании в любое время без предварительного уведомления.</p>
                    
                   <p>Компания оставляет за собой право вносить любые изменения в Продукты Компании в любое время по собственному усмотрению, без любых (предварительных и последующих) уведомлений Пользователей.
                    Вы соглашаетесь регулярно отслеживать информацию об изменениях Условий использования и других документов. Как правило, любые изменения в текстах правовых документов вступают в силу не ранее
                    четырнадцати дней с момента публикации. Тем не менее вам стоит обратить внимание на то, что в некоторых случаях такие изменения будут применяться немедленно.</p>
                </div>
                <div className="condition__left-title" id="reg">
                    Регистрация Пользователя. Учётная запись Пользователя.
                </div>
                <div className="condition__left-text">
                   <p>Для того чтобы воспользоваться некоторыми Продуктами Компании, необходима учётная запись Пользователя (аккаунт Пользователя). Вы можете создать её сами, пройдя
                     процедуру регистрации, или в некоторых случаях логин и пароль от учётной записи вам предоставит Компания и/или иное уполномоченное лицо.</p>
                     
                   <p>Вы несёте полную ответственность за сохранение конфиденциальности информации вашей учётной записи, включая ваш пароль, а также за всю без исключения деятельность,
                      которая ведётся от имени вашей учётной записи, в том числе за все действия, которые выполняются под учётной записью. Поэтому не сообщайте пароль от вашей учётной записи посторонним, 
                      а также не используйте этот пароль вне Продуктов Компании.</p>
                    
                   <p>Вы соглашаетесь незамедлительно уведомить Компанию о фактах компрометации ваших аутентификационных данных: несанкционированном использовании вашей учётной записи и/или пароля и/или
                     любом другом нарушении системы безопасности. Это означает, что если вы полагаете, что третьи лица несанкционированно получили доступ к вашей учётной записи, либо обнаружили, что в 
                     вашей учётной записи и/или с помощью вашего пароля выполняются несанкционированные действия, вам необходимо как можно скорее сообщить об этом Компании.</p>
                    
                   <p>В случае несогласия Пользователя с какими‑либо из положений Условий использования, Пользователь не вправе использовать Продукты Компании.
                    В случае внесения Компанией изменений в Условия использования или если Пользователь начал использовать   Продукты Компании, но с условиями 
                    не согласен, последний обязан прекратить использование Продуктов Компании. При этом к отношениям, возникшим в период использования Пользователем Продуктов Компании,
                    применяются положения Условий использования, если иное не установлено дополнительно.</p>
                    
                   <p>Несмотря на соблюдение этого требования, на вас может быть возложена ответственность за убытки, понесённые Компанией и/или любым другим Пользователем, и/или Пользователем
                     Продуктов Компании, в связи с использованием конфиденциальной информации вашей учётной записи третьим лицом.</p>
                                    
                </div>
           </div>
           <div className="condition__right">
                <div className="condition__right-link">
                    <Link to="#area">Область применения (предмет, принятие, изменение)</Link> <br/>
                    <Link to="#reg">Регистрация Пользователя. Учётная запись Пользователя.</Link>
                </div>              
           </div>
        </div>
       </div> 
    )
}
