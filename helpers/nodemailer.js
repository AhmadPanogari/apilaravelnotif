'use strict';
const nodemailer = require('nodemailer');
const config = require('../config/app');

const send = async(receiver,subject,message)=>{
    var template = `<div id="" class="">
    <div bgcolor="#FFFFFF" style="margin:0;padding:0">
        <table border="0" cellpadding="0" cellspacing="0" height="100%" style="min-width:348px" width="100%">
            <tbody>
                <tr height="32px"></tr>
                <tr align="center">
                    <td>
                        <div>
                            <div></div>
                        </div>
                        <table border="0" cellpadding="0" cellspacing="0" style="padding-bottom:20px;max-width:600px;min-width:220px">
                            <tbody>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <table border="0" cellpadding="0" cellspacing="0" style="direction:ltr;padding-bottom:7px" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left"><img height="32" src="https://ci5.googleusercontent.com/proxy/NB4U3hBEm5HhAGfkGgks-ZqREHO98DeWa49bAdJO5FH6KocZd2fkfU5NrMm0BzyCxApKEtIMIR1PVsqcQGgMZdCR6u-towy9PJiK9krnMUfaLy4vdDCHNuvw5BxTnnI=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/googlelogo_color_188x64dp.png" style="width:92px;height:32px" width="92" class="CToWUd"></td>
                                                                    <td align="right" style="font-family:Roboto-Light,Helvetica,Arial,sans-serif">{ACCOUNT_PEMILIK}</td>
                                                                    <td align="right" width="35"><img height="28" src="https://ci5.googleusercontent.com/proxy/6NSREpM_-WhRjzfatLPCRhciZraXl3AMbeFU3GLfke5Fd1h9L4wL7VSpz498N2riQzzfhqPOCadJSXvL07dfBvHo1B4zOoPMq3uSfzYJ62QHcbChiXGBB3D-uIne=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" style="width:28px;height:28px;border-radius:50%" width="28" class="CToWUd"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!-- <div style="background-color:#f5f5f5;direction:ltr;padding:22px 16px;margin-bottom:8px">
                                                            <table border="0" cellpadding="0" cellspacing="0" class="m_8013155676173973946v2rsp" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="vertical-align:top"><img height="40px" src="https://ci4.googleusercontent.com/proxy/UZtRFEKD8InXc69aiziX2krhJ1k4yOcvp6fSZaoBRel20milXYexXKybyEUyVCet-Pz7KbtRrs0pk0V7g6B2XGkzrEWZJGlevOYvvcnKc4hcLyOiwpIZ=s0-d-e1-ft#https://www.gstatic.com/images/branding/product/2x/email_48dp.png" class="CToWUd"></td>
                                                                        <td width="16px"></td>
                                                                        <td style="direction:ltr"><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:rgba(0,0,0,0.87);line-height:1.6;color:rgba(0,0,0,0.54)">Your account <a style="text-decoration:none;color:rgba(0,0,0,0.87)">apans.p@gmail.com</a> is listed as the recovery email for <a style="text-decoration:none;color:rgba(0,0,0,0.87)">ahmad.panogari  @rasdm.com</a>.</span> <span><span style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:rgba(0,0,0,0.87);line-height:1.6;color:rgba(0,0,0,0.54)">Don't recognize this account? <a href="https://accounts.google.com/AccountDisavow?adt=AOX8kirMKzNUeQ4xgBnPIqTtNf4FHl_UKsuOKb4C9QLzrMRoNVa66nFwqHCWQQ&amp;rfn=27&amp;anexp=givab-fa--gpsv2-f1" style="text-decoration:none;color:#4285f4" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://accounts.google.com/AccountDisavow?adt%3DAOX8kirMKzNUeQ4xgBnPIqTtNf4FHl_UKsuOKb4C9QLzrMRoNVa66nFwqHCWQQ%26rfn%3D27%26anexp%3Dgivab-fa--gpsv2-f1&amp;source=gmail&amp;ust=1537415334446000&amp;usg=AFQjCNGCoE0tWlqtmcNRww-jH5rMusa1Dg">Click here</a></span></span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div> -->
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td style="background:url('https://ci4.googleusercontent.com/proxy/nt_AIB8tvZvtjQ12K1IxqaM2XPLvZjk-KfB0zxDCUh74WW4hggtOwVMhqJjCPlfdv-7695plB1wt2DOjd6bfj9g6YSYsIWkLks-Sp2OOLZrCHVSNqA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png') center left repeat-y" width="6">
                                                        <div></div>
                                                    </td>
                                                    <td style="height:4px;background-color:#ea4335"></td>
                                                    <td style="background:url('https://ci6.googleusercontent.com/proxy/nl-bhiVKfxoOB7l8fKJYsYxLGDXboVNAkOuVf2Uvp0gH24jKX-8iA4BRlejLgTxLKrMUJ_-Bl4tXJPbWh4qe7du3j2u-XwOc4vXL4K7JsVPWNAup3A=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png') center left repeat-y" width="6">
                                                        <div></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background:url('https://ci4.googleusercontent.com/proxy/nt_AIB8tvZvtjQ12K1IxqaM2XPLvZjk-KfB0zxDCUh74WW4hggtOwVMhqJjCPlfdv-7695plB1wt2DOjd6bfj9g6YSYsIWkLks-Sp2OOLZrCHVSNqA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png') center left repeat-y" width="6">
                                                        <div></div>
                                                    </td>
                                                    <td>
                                                        <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;padding-left:20px;padding-right:20px;border-bottom:thin solid #f0f0f0;color:rgba(0,0,0,0.87);font-size:24px;padding-bottom:30px;padding-top:32px;text-align:center;word-break:break-word">
                                                            <div class="m_8013155676173973946v2sp">
                                                                <div style="text-align:center;padding-bottom:13px"><img height="39px" src="https://ci6.googleusercontent.com/proxy/isuGkenZ0l1Ej-HaRqTXxu0Ejx6eWfxBaoACCHaDXYtenQs24oeKGgeucBlrZKyLTXmhjs8-1mSnN4wSbDbf9CKySNDu-NGj80lXNqa5YDAtCqI9o8iqmY4=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/Red_circle_x2_35x39.png" class="CToWUd"></div>{HEADER_1}
                                                                <br><a style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.87);font-size:16px;line-height:1.8">{HEADER_KE_2}</a></div>
                                                        </div>
                                                        <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:rgba(0,0,0,0.87);line-height:1.6;padding-left:20px;padding-right:20px;padding-bottom:32px;padding-top:24px">
                                                            <div class="m_8013155676173973946v2sp">
                                                                    <a>Nama : {COMPLATE_NAME}</a> <br></br> 
                                                                    <a>Nama Perusahaan : {COMPANY_NAME}</a> <br></br> 
                                                                    <a>Alamat Perusahaan : {COMPANY_ADDRESS}</a> <br></br> 
                                                                    <a>Nomor Telephone : {PHONE_COMPANY}</a> <br></br> 
                                                                    <a>Produk : {TITLE_PRODUK}</a> <br></br> 
                                                                    <a>Spesifiaksi : {LONG_SPECH}</a> <br></br>
                                                                <div style="padding-top:24px;text-align:center">
                                                                    <a href="" style="display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="">
                                                                        <table border="0" cellpadding="0" cellspacing="0" style="background-color:#4184f3;border-radius:2px;min-width:90px">
                                                                            <tbody>
                                                                                <tr style="height:6px"></tr>
                                                                                <tr>
                                                                                    <td style="padding-left:8px;padding-right:8px;text-align:center"><a href="" style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#ffffff;font-weight:400;line-height:20px;text-decoration:none;font-size:13px;text-transform:uppercase" target="_blank" data-saferedirecturl="">Check activity/ Process</a></td>
                                                                                </tr>
                                                                                <tr style="height:6px"></tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style="background:url('https://ci6.googleusercontent.com/proxy/nl-bhiVKfxoOB7l8fKJYsYxLGDXboVNAkOuVf2Uvp0gH24jKX-8iA4BRlejLgTxLKrMUJ_-Bl4tXJPbWh4qe7du3j2u-XwOc4vXL4K7JsVPWNAup3A=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png') center left repeat-y" width="6">
                                                        <div></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="5" style="background:url('https://ci3.googleusercontent.com/proxy/jfAHFNbb5XE9oYVyuunjwVJtgqc_knoooAotgLuxEgfAyq_Wjxon4zP-UeAI9LypsjsmD4LIbAkRu_ypi36lEngdVUx92ToChAkh_jvPYFWG0yrUFZu5=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png') top left no-repeat" width="6">
                                                        <div></div>
                                                    </td>
                                                    <td height="5" style="background:url('https://ci5.googleusercontent.com/proxy/RniWkHAniZgi6tGOh-m_jRAhJfDZPUcI07_qMnA2H3lz_OgKL92-fTeRX-hGfY0Xe7vmSdFV8JegmJHRXnoFCJ8AHeqnb0WRxPQLPmjroNPBoVQoHg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png') top center repeat-x">
                                                        <div></div>
                                                    </td>
                                                    <td height="5" style="background:url('https://ci6.googleusercontent.com/proxy/4eP0Q0IrdbbpIB09xEGV4oCRL6wZSSIR3WUel-pqjhdIMo4ehQk3f-p8izrdtEcVBkwKnVQYEh39DC6hMooGoc7H-q6EL3UH39aLF_9OSzX48i-BopOl=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png') top left no-repeat" width="6">
                                                        <div></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <div style="text-align:left">
                                                            <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:12px;line-height:20px;padding-top:10px">
                                                                <div>{FOOTER_MESSAGE}</div>
                                                                <div style="direction:ltr">© 2018 {NAMA_PERUSAHAAN},<a class="m_8013155676173973946afal" style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:12px;line-height:20px;padding-top:10px">{ALAMAT_PERUSAHAAN}</a></div>
                                                            </div>
                                                            <div style="display:none!important;max-height:0px;max-width:0px">1537326838000000</div>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr height="32px"></tr>
            </tbody>
        </table><img height="1" src="https://ci5.googleusercontent.com/proxy/egpHvpBcD_B3PTNavhuz_zKTrhwQWc18K2r5mTGKIngadMoA44pTQ_bVlb4s6Pv9VThww35ZRaXsuSO95orXszSBQvtf2oMZkuMGKWqKDCl-TfDM4P7hAQdtKbasv2pbqcsFXNLC-foE7iviZZTk5cCyU_fibbKBQhTUnLS7R4lWFsC77rBsyrkrOxE8NthzHoiNyBpLhkX_3ZOuSTIs7CiNLIrYfXjJVTswWJaBW-MfdCZL13WqwRKigN7FP74czucjRQStyRRM5dSaGnc7Dw8bMx-d1o-G_7nwPJSebcMsdYS6WfIS1hKVHnXmDOqEUrvojJgAhLYrCLaxjlZIrWxHwFZ9lXKxDufdBk382c9pKfmQC3_79QGbQlm0G_Bp2HEjAT8cqh64noGwi0TXVZyWNz7fFg=s0-d-e1-ft#https://notifications.googleapis.com/email/a.gif?t=AFG8qyUh6omEWJFGr5r7bCGYJaZ5xQMadOskVpkIPtDj9r8JbrA9cM7nT8tciypwX5iebZxCtskWysLOzFSnrmRfXgOfXwz1yo4fOcfnzdA9kj26E_KgDJLAHKLL4xk_AyEo6X5tPay_Mt760_R9EqqURW0w_s-vIzPIhgrqcUFD1XNt_VxxeGSl8LVO7NdHpRpltP8Y8CzOkYxhVzZuGOBlfnZHEwAtNKI3lo6M4GON" width="1" class="CToWUd"></div>
</div>`;
    let dataMsg = JSON.parse(message);
    template = template.replace('{ACCOUNT_PEMILIK}','AKUN PEMILIK');
    template = template.replace('{HEADER_1}','PESANAN BARU');
    template = template.replace('{HEADER_KE_2}','ANDA MEMILIKI PESANAN BARU');
    template = template.replace('{COMPLATE_NAME}',dataMsg[0].ComplateName);
    template = template.replace('{COMPANY_NAME}',dataMsg[0].CompanyName);
    template = template.replace('{COMPANY_ADDRESS}',dataMsg[0].CompanyAddress);
    template = template.replace('{PHONE_COMPANY}',dataMsg[0].PhoneCompany);
    template = template.replace('{TITLE_PRODUK}',dataMsg[0].Title);
    template = template.replace('{LONG_SPECH}',dataMsg[0].LongSpecs);
    try {
        var transporter = nodemailer.createTransport({
            service: config.nodemailerservice,
            auth: {
                    user: config.nodemailerauth.username,
                    pass: config.nodemailerauth.password
                }
        });
        const mailOptions = {
            from: config.nodemailerauth.sender, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: template// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err){
            console.log(err);
            return err;
            }
            else{
            console.log(info);
            return info;
            }
        });
    } catch (e) {
        return e
    }
}

module.exports = {send};

